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

const AdminTopicNew = ({ selectedKey }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      category: "",
      topic_info: "",
      topic_name: "",
      topic_seo_title: "",
      topic_seo_description: "",
      topic_seo_keywords: "",
      topic_seo_slug: "",
      topic_status: "",
      topic_is_active: false,
    },
    onSubmit: (values) => {
      console.log({ ...values, topic_date: date });
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
                    label={"Topic Name"}
                    name={"topic_name"}
                    length={formik.values.topic_name.length}
                  />
                  <FormInputComponent
                    formik={formik}
                    label={"Topic Info"}
                    name={"topic_info"}
                    length={formik.values.topic_info.length}
                  />
                </Tab>

                <Tab key="seo-details" title="SEO Details">
                  <CardHeader>
                    <p>SEO Details</p>
                  </CardHeader>
                  <FormSeoComponents
                    formik={formik}
                    titleLabel={"Topic SEO Title"}
                    titleName={"topic_seo_title"}
                    titleValue={formik.values.topic_seo_title}
                    titleLength={formik.values.topic_seo_title.length}
                    descriptionLabel={"Topic SEO Description"}
                    descriptionName={"topic_seo_description"}
                    descriptionValue={formik.values.topic_seo_description}
                    descriptionLength={
                      formik.values.topic_seo_description.length
                    }
                    keywordsLabel={"Topic SEO Keywords"}
                    keywordsName={"topic_seo_keywords"}
                    keywordsValue={formik.values.topic_seo_keywords}
                    keywordsLength={formik.values.topic_seo_keywords.length}
                    slugLabel={"Topic SEO Slug"}
                    slugName={"topic_seo_slug"}
                    slugValue={formik.values.topic_seo_slug}
                    slugLength={formik.values.topic_seo_slug.length}
                  />
                </Tab>

                <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
                  <CardHeader>Status & Visibility</CardHeader>
                  <FormSelectComponent
                    label="Visibility"
                    name="topic_status"
                    placeholder="Select Status"
                    formik={formik}
                    selectedKeys={[formik.values.topic_status]}
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

                  {formik.values.topic_status &&
                    formik.values.topic_status === "SCHEDULE" && (
                      <DateTimeContainer dateChange={setDate} />
                    )}
                  <div className="flex gap-8 justify-between">
                    <FormSwitchComponent
                      formik={formik}
                      name={"topic_status"}
                      label={"Topic Is Active"}
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

export default AdminTopicNew;
