"use client";

import SubmitButton from "@/components/ui/buttons/submit-button";
import DateTimeContainer from "@/components/ui/date-picker/date-picker";
import FormInputComponent from "@/components/ui/form/form-input-component";
import FormSelectComponent from "@/components/ui/form/form-select-component";
import FormSeoComponents from "@/components/ui/form/form-seo-components";
import FormSwitchComponent from "@/components/ui/form/form-switch-component";
import { Card, CardHeader, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";

const AdminExamNew = ({ selectedKey }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      category: "",
      exam_info: "",
      exam_name: "",
      exam_seo_title: "",
      exam_seo_description: "",
      exam_seo_keywords: "",
      exam_seo_slug: "",
      exam_status: "",
      exam_is_active: false,
    },
    onSubmit: (values) => {
      console.log({ ...values, exam_date: date });
    },
  });

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="grid col-span-3"></div>
        <div className="grid col-span-9">
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
                  />
                  <FormInputComponent
                    formik={formik}
                    label={"Exam Info"}
                    name={"exam_info"}
                    length={formik.values.exam_info.length}
                  />
                </Tab>

                <Tab key="seo-details" title="SEO Details">
                  <CardHeader>
                    <p>SEO Details</p>
                  </CardHeader>
                  <FormSeoComponents
                    formik={formik}
                    titleLabel={"Exam SEO Title"}
                    titleName={"exam_seo_title"}
                    titleValue={formik.values.exam_seo_title}
                    titleLength={formik.values.exam_seo_title.length}
                    descriptionLabel={"Exam SEO Description"}
                    descriptionName={"exam_seo_description"}
                    descriptionValue={formik.values.exam_seo_description}
                    descriptionLength={
                      formik.values.exam_seo_description.length
                    }
                    keywordsLabel={"Exam SEO Keywords"}
                    keywordsName={"exam_seo_keywords"}
                    keywordsValue={formik.values.exam_seo_keywords}
                    keywordsLength={formik.values.exam_seo_keywords.length}
                    slugLabel={"Exam SEO Slug"}
                    slugName={"exam_seo_slug"}
                    slugValue={formik.values.exam_seo_slug}
                    slugLength={formik.values.exam_seo_slug.length}
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
                      name={"exam_status"}
                      label={"Exam Is Active"}
                    />
                    <SubmitButton isSaving={isSaving} />
                  </div>
                </Tab>
              </Tabs>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminExamNew;
