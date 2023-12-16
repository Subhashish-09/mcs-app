"use client";

import SubmitButton from "@/components/ui/buttons/submit-button";
import DateTimeContainer from "@/components/ui/date-picker/date-picker";
import FormInputComponent from "@/components/ui/form/form-input-component";
import FormSelectComponent from "@/components/ui/form/form-select-component";

import FormSwitchComponent from "@/components/ui/form/form-switch-component";
import { Card, CardHeader, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { CreateClass } from "../actions/class-functions";
import { useRouter } from "next/navigation";

const AdminClassNew = ({ selectedKey }) => {
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      class_name: "",
      class_status: "",
      class_is_active: false,
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      const { error } = await CreateClass({ ...values, class_date: date });

      if (!error) {
        router.back();
      }
      setIsSaving(false);
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
                label={"Class Name"}
                name={"class_name"}
                length={formik.values.class_name.length}
                value={formik.values.class_name}
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
                  name={"class_is_active"}
                  label={"Class Is Active"}
                  isSelected={formik.values.class_is_active}
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

export default AdminClassNew;
