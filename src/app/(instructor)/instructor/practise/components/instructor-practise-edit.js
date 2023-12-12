"use client";

import SubmitButton from "@/components/ui/buttons/submit-button";
import FormInputComponent from "@/components/ui/form/form-input-component";
import FormSelectComponent from "@/components/ui/form/form-select-component";
import FormSeoComponents from "@/components/ui/form/form-seo-components";
import FormSwitchComponent from "@/components/ui/form/form-switch-component";
import { Card, CardHeader, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const InstructorPractiseEdit = ({
  practise_data,
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
      category: practise_data.practise_category,
      sub_category: practise_data.practise_sub_category,
      topic: practise_data.practise_topic,
      practise_name: practise_data.practise_name,
      practise_seo_title: practise_data.practise_seo_title,
      practise_seo_description: practise_data.practise_seo_description,
      practise_seo_keywords: practise_data.practise_seo_keywords,
      practise_seo_slug: practise_data.practise_seo_slug,
      practise_is_active: practise_data.practise_is_active,
      practise_status: practise_data.practise_status,
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
      <Card className="p-5" raised sx={{ marginBottom: "25px" }}>
        <form onSubmit={formik.handleSubmit}>
          <Tabs
            variant="underlined"
            aria-label="form-options"
            selectedKey={selectedKey}
            fullWidth
          >
            <Tab key="cat-sub-topic" title="Main Details">
              <CardHeader>
                <p>Practise Details</p>
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
            <Tab key={"Practise Info"} title={"Practise Info"}>
              <CardHeader>
                <p>Practise Info</p>
              </CardHeader>
              <FormInputComponent
                value={formik.values.practise_name}
                formik={formik}
                label={"Practise Name"}
                name={"practise_name"}
                length={formik.values.practise_name.length}
              />
            </Tab>
            <Tab key={"Practise Seo Details"} title={"Practise Seo Details"}>
              <CardHeader>
                <p>Practise SEO Details</p>
              </CardHeader>

              <FormSeoComponents
                formik={formik}
                titleName={"practise_seo_title"}
                titleLabel={"Practise SEO Title"}
                titleLength={formik.values.practise_seo_title.length}
                titleValue={formik.values.practise_seo_title}
                descriptionName={"practise_seo_description"}
                descriptionLabel={"Practise SEO Description"}
                descriptionLength={
                  formik.values.practise_seo_description.length
                }
                descriptionValue={formik.values.practise_seo_description}
                keywordsName={"practise_seo_keywords"}
                keywordsLabel={"Practise SEO Keywords"}
                keywordsLength={formik.values.practise_seo_keywords.length}
                keywordsValue={formik.values.practise_seo_keywords}
                slugName={"practise_seo_slug"}
                slugLabel={"Practise SEO Slug"}
                slugLength={formik.values.practise_seo_slug.length}
                slugValue={formik.values.practise_seo_slug}
              />
            </Tab>
            <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
              <CardHeader>Status & Visibility</CardHeader>
              <FormSelectComponent
                label="Visibility"
                name="practise_status"
                placeholder="Select Status"
                formik={formik}
                selectedKeys={[formik.values.practise_status]}
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

              {formik.values.practise_status &&
                formik.values.practise_status === "SCHEDULE" && (
                  <DateTimeContainer dateChange={setDate} />
                )}
              <div className="flex gap-8 justify-between">
                <FormSwitchComponent
                  formik={formik}
                  name={"practise_is_active"}
                  label={"Practise Is Active"}
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

export default InstructorPractiseEdit;
