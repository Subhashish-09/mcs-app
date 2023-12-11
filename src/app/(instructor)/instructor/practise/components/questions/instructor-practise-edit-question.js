"use client";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import supabaseClient from "@/lib/supabase/client";

const InstructorPractiseEditQuestion = ({ question }) => {
  const supabase = supabaseClient();
  const { control, handleSubmit, reset, watch, setValue, getValues } = useForm({
    defaultValues: {
      question: question["question"],
      options: Array.from(
        Array.from(Array(question["options_length"]).keys()).map((i) => ({
          value: question["option_" + Number(i + 1)],
        }))
      ),
    },
  });

  const router = useRouter();

  const [editErrors, setEditErrors] = useState();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const watchQuestion = watch("question");
  const watchOptions = watch("options");

  const handleQuestionChange = (editorData) => {
    setValue("question", editorData);
  };

  const handleEditorChange = (index, editorData) => {
    const newOptions = [...getValues("options")];
    newOptions[index] = { value: editorData };
    setValue("options", newOptions);
  };

  const QuestionSaveHandler = async (form) => {
    let options = {};

    for (let i = 1; i <= question["options_length"]; i++) {
      options["option_" + i] = form["options"][i - 1]["value"];
    }

    const { data, error } = await supabase
      .from("practiseQBank")
      .update({
        question: form["question"],
        options_length: fields.length,
        correct_option: {
          correct:
            question["question_type"] === "MSA"
              ? question["correct_option"]["correct"]
              : Array.from(question["correct_option"].split(","), Number),
        },
        option_1: options["option_1"],
        option_2: options["option_2"],
        option_3: options["option_3"],
        option_4: options["option_4"],
        option_5: options["option_5"],
      })
      .eq("question_id", question.question_id)
      .select();

    if (error !== null) {
      setIsSaving(false);
      setEditErrors(error);
    }

    if (error == null && data !== null) {
      router.back();
    }
  };

  return (
    <FormProvider>
      <form onSubmit={handleSubmit(QuestionSaveHandler)}>
        Question
        <CKEditor
          editor={ClassicEditor}
          data={watchQuestion}
          config={{ autoUpdateData: false }}
          onChange={(event, editor) => {
            handleQuestionChange(editor.getData());
          }}
        />
        Options
        {fields.map((field, index) => (
          <div id={"option_" + index} key={"option_" + index}>
            <CKEditor
              editor={ClassicEditor}
              data={watchOptions[index]["value"]}
              config={{ autoUpdateData: false }} // Add this configuration
              disableWatchdog
              onChange={(event, editor) => {
                handleEditorChange(index, editor.getData());
              }}
            />
            <Button
              onClick={() => {
                remove(index);
              }}
            >
              Remove
            </Button>

            <Button
              onClick={() => {
                append("");
              }}
            >
              Add
            </Button>
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default InstructorPractiseEditQuestion;
