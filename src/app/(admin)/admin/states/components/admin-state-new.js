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

const AdminStateNew = ({ selectedKey }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      State: "",
      state_info: "",
      state_name: "",
      state_seo_title: "",
      state_seo_description: "",
      state_seo_keywords: "",
      state_seo_slug: "",
      state_status: "",
      state_is_active: false,
    },
    onSubmit: (values) => {
      console.log({ ...values, state_date: date });
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
                    label={"State Name"}
                    name={"state_name"}
                    length={formik.values.state_name.length}
                  />
                  <FormInputComponent
                    formik={formik}
                    label={"State Info"}
                    name={"state_info"}
                    length={formik.values.state_info.length}
                  />
                </Tab>

                <Tab key="seo-details" title="SEO Details">
                  <CardHeader>
                    <p>SEO Details</p>
                  </CardHeader>
                  <FormSeoComponents
                    formik={formik}
                    titleLabel={"State SEO Title"}
                    titleName={"state_seo_title"}
                    titleValue={formik.values.state_seo_title}
                    titleLength={formik.values.state_seo_title.length}
                    descriptionLabel={"State SEO Description"}
                    descriptionName={"state_seo_description"}
                    descriptionValue={formik.values.state_seo_description}
                    descriptionLength={
                      formik.values.state_seo_description.length
                    }
                    keywordsLabel={"State SEO Keywords"}
                    keywordsName={"state_seo_keywords"}
                    keywordsValue={formik.values.state_seo_keywords}
                    keywordsLength={formik.values.state_seo_keywords.length}
                    slugLabel={"State SEO Slug"}
                    slugName={"state_seo_slug"}
                    slugValue={formik.values.state_seo_slug}
                    slugLength={formik.values.state_seo_slug.length}
                  />
                </Tab>

                <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
                  <CardHeader>Status & Visibility</CardHeader>
                  <FormSelectComponent
                    label="Visibility"
                    name="state_status"
                    placeholder="Select Status"
                    formik={formik}
                    selectedKeys={[formik.values.state_status]}
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

                  {formik.values.state_status &&
                    formik.values.state_status === "SCHEDULE" && (
                      <DateTimeContainer dateChange={setDate} />
                    )}
                  <div className="flex gap-8 justify-between">
                    <FormSwitchComponent
                      formik={formik}
                      name={"state_status"}
                      label={"State Is Active"}
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

export default AdminStateNew;
