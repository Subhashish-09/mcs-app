"use client";

import SubmitButton from "@/components/ui/buttons/submit-button";
import FormInputComponent from "@/components/ui/form/form-input-component";
import FormSelectComponent from "@/components/ui/form/form-select-component";
import FormSeoComponents from "@/components/ui/form/form-seo-components";
import FormSwitchComponent from "@/components/ui/form/form-switch-component";
import { Card, CardHeader, SelectItem, Tab, Tabs } from "@nextui-org/react";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import { useEffect, useState } from "react";

const InstructorQuizNew = ({
  categories,
  subCategories,
  topics,
  selectedKey,
}) => {
  const [categoryData, setCategoryData] = useState(categories);
  const [subCategoryData, setSubCategoryData] = useState(subCategories);
  const [topicData, setTopicData] = useState(topics);
  const [date, setDate] = useState();

  const [isSaving, setIsSaving] = useState(false);

  const formik = useFormik({
    initialValues: {
      category: "",
      sub_category: "",
      topic: "",
      quiz_name: "",
      quiz_seo_title: "",
      quiz_seo_description: "",
      quiz_seo_keywords: "",
      quiz_seo_slug: "",
      quiz_is_active: false,
      quiz_correct_points: 0,
      quiz_incorrect_points: 0,
      quiz_unattempted_points: 0,
      quiz_subjects: [
        {
          name: "",
          initial_question_no: 0,
          final_question_no: 0,
        },
      ],
      quiz_chapters: [{ name: "" }],
      quiz_total_points: 0,
      quiz_total_questions: 0,
      quiz_status: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const filter = subCategories?.filter(
      (e) => e.category === formik.values.category
    );
    setSubCategoryData(filter);
  }, [formik.values.category]);

  useEffect(() => {
    const filter = topics
      ?.filter((e) => e.category === formik.values.category)
      .filter((e) => e.sub_category === formik.values.sub_category);
    setTopicData(filter);
  }, [formik.values.category, formik.values.sub_category]);
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="grid col-span-3"></div>
        <div className="grid col-span-9">
          <Card className="p-5" raised sx={{ marginBottom: "25px" }}>
            <Formik
              initialValues={formik.values}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ values }) => (
                <Form>
                  <Tabs
                    variant="underlined"
                    aria-label="form-options"
                    selectedKey={selectedKey}
                    fullWidth
                  >
                    <Tab key="cat-sub-topic" title="Main Details">
                      <CardHeader>
                        <p>Quiz Details</p>
                      </CardHeader>
                      <FormSelectComponent
                        label="Category"
                        name="category"
                        placeholder="Select a Category"
                        selectedKeys={[formik.values.category]}
                        formik={formik}
                      >
                        {categoryData?.map((cat) => (
                          <SelectItem
                            key={cat.category_seo_slug}
                            value={cat.category_seo_slug}
                          >
                            {cat.category_name}
                          </SelectItem>
                        ))}
                      </FormSelectComponent>

                      <FormSelectComponent
                        formik={formik}
                        label="Sub Category"
                        placeholder="Select a Sub Category"
                        name="sub_category"
                        selectedKeys={[formik.values.sub_category]}
                      >
                        {subCategoryData?.map((cat) => (
                          <SelectItem
                            key={cat.sub_category_seo_slug}
                            value={cat.sub_category_seo_slug}
                          >
                            {cat.sub_category_name}
                          </SelectItem>
                        ))}
                      </FormSelectComponent>
                      <FormSelectComponent
                        formik={formik}
                        label="Topic"
                        placeholder="Select a Topic"
                        name="topic"
                        selectedKeys={[formik.values.topic]}
                      >
                        {topicData &&
                          topicData?.map((cat) => (
                            <SelectItem
                              key={cat.topic_seo_slug}
                              value={cat.topic_seo_slug}
                            >
                              {cat.topic_name}
                            </SelectItem>
                          ))}
                      </FormSelectComponent>
                    </Tab>
                    <Tab key={"Quiz Info"} title={"Quiz Info"}>
                      <CardHeader>
                        <p>Quiz Info</p>
                      </CardHeader>
                      <FormInputComponent
                        formik={formik}
                        label={"Quiz Name"}
                        name={"quiz_name"}
                        length={formik.values.quiz_name.length}
                      />
                    </Tab>
                    <Tab
                      key={"Subjects  & Chapters"}
                      title={"Subjects  & Chapters"}
                    >
                      <CardHeader>
                        <p>Subjects & Chapters</p>
                      </CardHeader>

                      <FieldArray name="quiz_subjects">
                        {({ insert, remove, push }) => (
                          <div>
                            {values.quiz_subjects.length > 0 &&
                              values.quiz_subjects.map((friend, index) => (
                                <div className="row" key={index}>
                                  <div className="col">
                                    <Field
                                      label={"Subject-" + index}
                                      name={`quiz_subjects.${index}.name`}
                                      placeholder={"Subject-" + index}
                                    />
                                    <Field
                                      label={"Subject-" + index}
                                      name={`quiz_subjects.${index}.initial_question_no`}
                                      placeholder={"Subject-" + index}
                                    />
                                    <Field
                                      label={"Subject-" + index}
                                      name={`quiz_subjects.${index}.final_question_no`}
                                      placeholder={"Subject-" + index}
                                    />
                                  </div>
                                  <div className="col">
                                    <button
                                      type="button"
                                      className="secondary"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              ))}
                            <button
                              type="button"
                              className="secondary"
                              onClick={() =>
                                push({
                                  name: "",
                                  initial_question_no: 0,
                                  final_question_no: 0,
                                  chapters: [{ name: "" }],
                                })
                              }
                            >
                              Add Subject
                            </button>
                          </div>
                        )}
                      </FieldArray>

                      <FieldArray name="quiz_chapters">
                        {({ insert, remove, push }) => (
                          <div>
                            {values.quiz_chapters.length > 0 &&
                              values.quiz_chapters.map((friend, index) => (
                                <div className="row" key={index}>
                                  <div className="col">
                                    <Field
                                      label={"Chapter-" + index}
                                      name={`quiz_chapters.${index}.name`}
                                      placeholder={"Chapter-" + index}
                                    />
                                  </div>
                                  <div className="col">
                                    <button
                                      type="button"
                                      className="secondary"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              ))}
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => push({ name: "" })}
                            >
                              Add Chapter
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </Tab>
                    <Tab
                      key={"Grading  & Questions"}
                      title={"Grading  & Questions"}
                    >
                      <CardHeader>
                        <p>Grading</p>
                      </CardHeader>
                      <FormInputComponent
                        formik={formik}
                        label={"Correct Points"}
                        name={"quiz_correct_points"}
                        length={formik.values.quiz_correct_points.length}
                      />
                      <FormInputComponent
                        formik={formik}
                        label={"Incorrect Points"}
                        name={"quiz_incorrect_points"}
                        length={formik.values.quiz_incorrect_points.length}
                      />
                      <FormInputComponent
                        formik={formik}
                        label={"Unattempted Points"}
                        name={"quiz_unattempted_points"}
                        length={formik.values.quiz_unattempted_points.length}
                      />
                      <FormInputComponent
                        formik={formik}
                        label={"Total Points"}
                        name={"quiz_total_points"}
                        length={formik.values.quiz_total_points.length}
                      />
                      <CardHeader>
                        <p>Questions</p>
                      </CardHeader>
                      <FormInputComponent
                        formik={formik}
                        label={"Total Questions"}
                        name={"quiz_total_questions"}
                        length={formik.values.quiz_total_questions.length}
                      />
                    </Tab>

                    <Tab
                      key={"Status & Visibility"}
                      title={"Status & Visibility"}
                    >
                      <CardHeader>Status & Visibility</CardHeader>
                      <FormSelectComponent
                        label="Visibility"
                        name="quiz_status"
                        placeholder="Select Status"
                        formik={formik}
                        selectedKeys={[formik.values.quiz_status]}
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

                      {formik.values.quiz_status &&
                        formik.values.quiz_status === "SCHEDULE" && (
                          <DateTimeContainer dateChange={setDate} />
                        )}
                      <div className="flex gap-8 justify-between">
                        <FormSwitchComponent
                          formik={formik}
                          name={"quiz_is_active"}
                          label={"Quiz Is Active"}
                        />
                        <SubmitButton isSaving={isSaving} />
                      </div>
                    </Tab>
                  </Tabs>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </div>
    </>
  );
};

export default InstructorQuizNew;
