"use client";

import SubmitButton from "@/components/ui/buttons/submit-button";
import DateTimeContainer from "@/components/ui/date-picker/date-picker";
import FormInputComponent from "@/components/ui/form/form-input-component";
import FormSelectComponent from "@/components/ui/form/form-select-component";
import FormSwitchComponent from "@/components/ui/form/form-switch-component";
import { Card, CardHeader, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { EditExam } from "../actions/exam-functions";
import { useRouter } from "next/navigation";

const AdminExamEdit = ({ selectedKey, examData }) => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      exam_name: examData["exam_name"],
      exam_status: examData["exam_status"],
      exam_is_active: examData["exam_is_active"],
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      const { error } = await EditExam({
        ...values,
        exam_date: date,
        exam_id: examData["exam_id"],
      });

      if (!error) {
        router.back();
      }
    },
  });

  return (
    <>
      <Card className="p-5" raised sx={{ marginBottom: "25px" }}>
        <form onSubmit={formik.handleSubmit}>
          <Tabs
            variant="underlined"
            aria-label="form-options"
            selectedKey={selectedKey}
            fullWidth
          >
            <Tab key="main-details" title="Main Details">
              <CardHeader>
                <p>Main Details</p>
              </CardHeader>
              <FormInputComponent
                formik={formik}
                label={"Exam Name"}
                name={"exam_name"}
                length={formik.values.exam_name.length}
                value={formik.values.exam_name}
              />
            </Tab>

            <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
              <CardHeader>Status & Visibility</CardHeader>
              <FormSelectComponent
                label="Visibility"
                name="exam_status"
                placeholder="Select Status"
                formik={formik}
                selectedKeys={[formik.values.exam_status]}
              >
                <SelectItem key={"PUBLIC"} value={"Published"}>
                  Published
                </SelectItem>
                <SelectItem key={"PRIVATE"} value={"Private"}>
                  Private
                </SelectItem>
                <SelectItem key={"SCHEDULE"} value={"Scheduled"}>
                  Scheduled
                </SelectItem>
                <SelectItem key={"DRAFT"} value={"Draft"}>
                  Draft
                </SelectItem>
              </FormSelectComponent>

              {formik.values.exam_status &&
                formik.values.exam_status === "SCHEDULE" && (
                  <DateTimeContainer dateChange={setDate} />
                )}
              <div className="flex gap-8 justify-between">
                <FormSwitchComponent
                  formik={formik}
                  name={"exam_is_active"}
                  label={"Exam Is Active"}
                  isSelected={formik.values.exam_is_active}
                />
                <SubmitButton isSaving={isSaving} />
              </div>
            </Tab>
          </Tabs>
        </form>
      </Card>
    </>
  );
};

export default AdminExamEdit;
