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

const AdminSubCategoryEdit = ({ selectedKey, subCategoryData }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      category: "",
      sub_category_info: subCategoryData["sub_category_info"],
      sub_category_name: subCategoryData["sub_category_name"],
      sub_category_seo_title: subCategoryData["sub_category_seo_title"],
      sub_category_seo_description:
        subCategoryData["sub_category_seo_description"],
      sub_category_seo_keywords: subCategoryData["sub_category_seo_keywords"],
      sub_category_seo_slug: subCategoryData["sub_category_seo_slug"],
      sub_category_status: subCategoryData["sub_category_status"],
      sub_category_is_active: subCategoryData["sub_category_is_active"],
    },
    onSubmit: (values) => {
      console.log({ ...values, sub_category_date: date });
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
                    label={"Sub Category Name"}
                    name={"sub_category_name"}
                    length={formik.values.sub_category_name.length}
                  />
                  <FormInputComponent
                    formik={formik}
                    label={"Sub Category Info"}
                    name={"sub_category_info"}
                    length={formik.values.sub_category_info.length}
                  />
                </Tab>

                <Tab key="seo-details" title="SEO Details">
                  <CardHeader>
                    <p>SEO Details</p>
                  </CardHeader>
                  <FormSeoComponents
                    formik={formik}
                    titleLabel={"Sub Category SEO Title"}
                    titleName={"sub_category_seo_title"}
                    titleValue={formik.values.sub_category_seo_title}
                    titleLength={formik.values.sub_category_seo_title.length}
                    descriptionLabel={"Sub Category SEO Description"}
                    descriptionName={"sub_category_seo_description"}
                    descriptionValue={
                      formik.values.sub_category_seo_description
                    }
                    descriptionLength={
                      formik.values.sub_category_seo_description.length
                    }
                    keywordsLabel={"Sub Category SEO Keywords"}
                    keywordsName={"sub_category_seo_keywords"}
                    keywordsValue={formik.values.sub_category_seo_keywords}
                    keywordsLength={
                      formik.values.sub_category_seo_keywords.length
                    }
                    slugLabel={"Sub Category SEO Slug"}
                    slugName={"sub_category_seo_slug"}
                    slugValue={formik.values.sub_category_seo_slug}
                    slugLength={formik.values.sub_category_seo_slug.length}
                  />
                </Tab>

                <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
                  <CardHeader>Status & Visibility</CardHeader>
                  <FormSelectComponent
                    label="Visibility"
                    name="sub_category_status"
                    placeholder="Select Status"
                    formik={formik}
                    selectedKeys={[formik.values.sub_category_status]}
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

                  {formik.values.sub_category_status &&
                    formik.values.sub_category_status === "SCHEDULE" && (
                      <DateTimeContainer dateChange={setDate} />
                    )}
                  <div className="flex gap-8 justify-between">
                    <FormSwitchComponent
                      formik={formik}
                      name={"sub_category_status"}
                      label={"Sub Category Is Active"}
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

export default AdminSubCategoryEdit;
