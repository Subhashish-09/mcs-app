"use client";

import {
  Card,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import SubmitButton from "@/components/submit-button";

const InstructorPractiseCreate = ({
  categories,
  subCategories,
  topics,
  selectedKey,
}) => {
  const [categoryData, setCategoryData] = useState(categories);
  const [subCategoryData, setSubCategoryData] = useState(subCategories);
  const [topicData, setTopicData] = useState(topics);
  const [date, setDate] = useState();

  const [status, setStatus] = useState(new Set([]));
  const [selectedCategory, setSelectedCategory] = useState(new Set([]));
  const [selectedSubCategory, setSelectedSubCategory] = useState(new Set([]));
  const [selectedTopic, setSelectedTopic] = useState(new Set([]));
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const filter = subCategories?.filter(
      (e) => e.category === selectedCategory.currentKey
    );
    setSubCategoryData(filter);
  }, [selectedCategory.currentKey]);

  useEffect(() => {
    const filter = topics
      ?.filter((e) => e.category === selectedCategory.currentKey)
      .filter((e) => e.sub_category === selectedSubCategory.currentKey);
    setTopicData(filter);
  }, [selectedCategory.currentKey, selectedSubCategory.currentKey]);

  const formik = useFormik({
    initialValues: {
      category: "",
      sub_category: "",
      topic: "",
      practise_name: "",
      practise_seo_title: "",
      practise_seo_description: "",
      practise_seo_keywords: "",
      practise_seo_slug: "",
      practise_is_active: false,
    },
    onSubmit: (values) => {
      console.log(values);
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
                <Tab key="cat-sub-topic" title="Main Details">
                  <CardHeader>
                    <p>Practise Details</p>
                  </CardHeader>
                  <Select
                    label="Category"
                    variant="bordered"
                    placeholder="Select a Category"
                    name="category"
                    selectedKeys={selectedCategory}
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    onSelectionChange={setSelectedCategory}
                    className="mb-5"
                  >
                    {categoryData?.map((cat) => (
                      <SelectItem
                        key={cat.category_seo_slug}
                        value={cat.category_seo_slug}
                      >
                        {cat.category_name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Sub Category"
                    variant="bordered"
                    placeholder="Select a Sub Category"
                    name="sub_category"
                    selectedKeys={selectedSubCategory}
                    onChange={formik.handleChange}
                    value={formik.values.sub_category}
                    onSelectionChange={setSelectedSubCategory}
                    className="mb-5"
                  >
                    {subCategoryData?.map((cat) => (
                      <SelectItem
                        key={cat.sub_category_seo_slug}
                        value={cat.sub_category_seo_slug}
                      >
                        {cat.sub_category_name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    variant="bordered"
                    label="Topic"
                    placeholder="Select a Topic"
                    name="topic"
                    selectedKeys={selectedTopic}
                    onChange={formik.handleChange}
                    value={formik.values.topic}
                    onSelectionChange={setSelectedTopic}
                    className="mb-5"
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
                  </Select>
                </Tab>
                <Tab key={"Practise Info"} title={"Practise Info"}>
                  <CardHeader>
                    <p>Practise Info</p>
                  </CardHeader>
                  <Input
                    variant="bordered"
                    label="Practise Name"
                    name="practise_name"
                    size="lg"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.practise_name}
                    endContent={formik.values.practise_name.length}
                  />
                </Tab>
                <Tab
                  key={"Practise Seo Details"}
                  title={"Practise Seo Details"}
                >
                  <CardHeader>
                    <p>Practise SEO Details</p>
                  </CardHeader>
                  <Input
                    variant="bordered"
                    type="text"
                    label="Practise SEO Title"
                    name="practise_seo_title"
                    className="mb-5"
                    onChange={formik.handleChange}
                    value={formik.values.practise_seo_title}
                    endContent={formik.values.practise_seo_title.length}
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    label="Practise SEO Description"
                    name="practise_seo_description"
                    className="mb-5"
                    onChange={formik.handleChange}
                    value={formik.values.practise_seo_description}
                    endContent={formik.values.practise_seo_description.length}
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    label="Practise SEO Keywords"
                    name="practise_seo_keywords"
                    className="mb-5"
                    onChange={formik.handleChange}
                    value={formik.values.practise_seo_keywords}
                    endContent={formik.values.practise_seo_keywords.length}
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    label="Practise SEO Slug"
                    name="practise_seo_slug"
                    className="mb-5"
                    onChange={formik.handleChange}
                    value={formik.values.practise_seo_slug}
                    endContent={formik.values.practise_seo_slug.length}
                  />
                </Tab>
                <Tab key={"Status & Visibility"} title={"Status & Visibility"}>
                  <CardHeader>Status & Visibility</CardHeader>
                  <Select
                    label="Visibility"
                    name="practise_status"
                    placeholder="Select Status"
                    selectedKeys={status}
                    onSelectionChange={setStatus}
                    variant="bordered"
                    className="mb-5"
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
                  </Select>
                  {status && status.currentKey === "SCHEDULE" && (
                    <DateTimeContainer dateChange={setDate} />
                  )}
                  <div className="flex gap-8 justify-between">
                    <Switch
                      name="practise_is_active"
                      onChange={formik.handleChange}
                      isSelected={formik.values.practise_is_active}
                      size="lg"
                    >
                      Practise Is Active
                    </Switch>
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

export default InstructorPractiseCreate;
