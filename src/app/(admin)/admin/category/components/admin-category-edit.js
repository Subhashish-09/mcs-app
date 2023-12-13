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

const AdminCategoryEdit = ({ categoryData, selectedKey }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      category_name: categoryData["category_name"],
      category_info: categoryData["category_info"],
      category_seo_title: categoryData["category_seo_title"],
      category_seo_description: categoryData["category_seo_description"],
      category_seo_keywords: categoryData["category_seo_keywords"],
      category_seo_slug: categoryData["category_seo_slug"],
      category_status: "",
      category_is_active: categoryData["category_is_active"],
    },
    onSubmit: (values) => {
      console.log({ ...values, category_date: date });
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
                    label={"Category Name"}
                    name={"category_name"}
                    length={formik.values.category_name.length}
                    value={formik.values.category_name}
                  />
                  <FormInputComponent
                    formik={formik}
                    label={"Category Info"}
                    name={"category_info"}
                    length={formik.values.category_info.length}
                    value={formik.values.category_info}
                  />
                </Tab>

                <Tab key="seo-details" title="SEO Details">
                  <CardHeader>
                    <p>SEO Details</p>
                  </CardHeader>
                  <FormSeoComponents
                    formik={formik}
                    titleLabel={"Category SEO Title"}
                    titleName={"category_seo_title"}
                    titleValue={formik.values.category_seo_title}
                    titleLength={formik.values.category_seo_title.length}
                    descriptionLabel={"Category SEO Description"}
                    descriptionName={"category_seo_description"}
                    descriptionValue={formik.values.category_seo_description}
                    descriptionLength={
                      formik.values.category_seo_description.length
                    }
                    keywordsLabel={"Category SEO Keywords"}
                    keywordsName={"category_seo_keywords"}
                    keywordsValue={formik.values.category_seo_keywords}
                    keywordsLength={formik.values.category_seo_keywords.length}
                    slugLabel={"Category SEO Slug"}
                    slugName={"category_seo_slug"}
                    slugValue={formik.values.category_seo_slug}
                    slugLength={formik.values.category_seo_slug.length}
                  />
                </Tab>

                <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
                  <CardHeader>Status & Visibility</CardHeader>
                  <FormSelectComponent
                    label="Visibility"
                    name="category_status"
                    placeholder="Select Status"
                    formik={formik}
                    selectedKeys={[formik.values.category_status]}
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

                  {formik.values.category_status &&
                    formik.values.category_status === "SCHEDULE" && (
                      <DateTimeContainer dateChange={setDate} />
                    )}
                  <div className="flex gap-8 justify-between">
                    <FormSwitchComponent
                      formik={formik}
                      name={"category_is_active"}
                      label={"Category Is Active"}
                      isSelected={formik.values.category_is_active}
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

export default AdminCategoryEdit;
