"use client";

import SubmitButton from "@/components/ui/buttons/submit-button";
import DateTimeContainer from "@/components/ui/date-picker/date-picker";
import FormInputComponent from "@/components/ui/form/form-input-component";
import FormSelectComponent from "@/components/ui/form/form-select-component";
import FormSwitchComponent from "@/components/ui/form/form-switch-component";
import { Card, CardHeader, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { CreateState } from "../actions/state-functions";
import { useRouter } from "next/navigation";

const AdminStateNew = ({ selectedKey }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [date, setDate] = useState();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      state_name: "",
      state_code: "",
      state_status: "",
      state_is_active: false,
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      const { error } = await CreateState({
        ...values,
        state_date: date,
      });

      if (!error || error === undefined) {
        router.back();
      }
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
                label={"State Name"}
                name={"state_name"}
                length={formik.values.state_name.length}
                value={formik.values.state_name}
              />
              <FormInputComponent
                formik={formik}
                label={"State Code"}
                name={"state_code"}
                length={formik.values.state_code.length}
                value={formik.values.state_code}
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
                  name={"state_is_active"}
                  label={"State Is Active"}
                  isSelected={formik.values.state_is_active}
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

export default AdminStateNew;
