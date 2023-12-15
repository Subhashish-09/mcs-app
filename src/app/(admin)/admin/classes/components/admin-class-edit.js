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

const AdminClassEdit = ({ selectedKey, classData }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      category: "",
      class_info: classData["class_info"],
      class_name: classData["class_name"],
      class_seo_title: classData["class_seo_title"],
      class_seo_description: classData["class_seo_description"],
      class_seo_keywords: classData["class_seo_keywords"],
      class_seo_slug: classData["class_seo_slug"],
      class_status: classData["class_status"],
      class_is_active: classData["class_is_active"],
    },
    onSubmit: (values) => {
      console.log({ ...values, class_date: date });
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
                    label={"Class Name"}
                    name={"class_name"}
                    length={formik.values.class_name.length}
                  />
                  <FormInputComponent
                    formik={formik}
                    label={"Class Info"}
                    name={"class_info"}
                    length={formik.values.class_info.length}
                  />
                </Tab>

                <Tab key="seo-details" title="SEO Details">
                  <CardHeader>
                    <p>SEO Details</p>
                  </CardHeader>
                  <FormSeoComponents
                    formik={formik}
                    titleLabel={"Class SEO Title"}
                    titleName={"class_seo_title"}
                    titleValue={formik.values.class_seo_title}
                    titleLength={formik.values.class_seo_title.length}
                    descriptionLabel={"Class SEO Description"}
                    descriptionName={"class_seo_description"}
                    descriptionValue={formik.values.class_seo_description}
                    descriptionLength={
                      formik.values.class_seo_description.length
                    }
                    keywordsLabel={"Class SEO Keywords"}
                    keywordsName={"class_seo_keywords"}
                    keywordsValue={formik.values.class_seo_keywords}
                    keywordsLength={formik.values.class_seo_keywords.length}
                    slugLabel={"Class SEO Slug"}
                    slugName={"class_seo_slug"}
                    slugValue={formik.values.class_seo_slug}
                    slugLength={formik.values.class_seo_slug.length}
                  />
                </Tab>

                <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
                  <CardHeader>Status & Visibility</CardHeader>
                  <FormSelectComponent
                    label="Visibility"
                    name="class_status"
                    placeholder="Select Status"
                    formik={formik}
                    selectedKeys={[formik.values.class_status]}
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

                  {formik.values.class_status &&
                    formik.values.class_status === "SCHEDULE" && (
                      <DateTimeContainer dateChange={setDate} />
                    )}
                  <div className="flex gap-8 justify-between">
                    <FormSwitchComponent
                      formik={formik}
                      name={"class_status"}
                      label={"Class Is Active"}
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

export default AdminClassEdit;
