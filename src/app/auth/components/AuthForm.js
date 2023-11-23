"use client";

import OAuth from "./OAuth";
import LoginAuth from "./LoginAuth";
import RegisterAuth from "./RegisterAuth";
import { Tab, Tabs } from "@nextui-org/react";

export function AuthForm() {
  return (
    <div className="w-full space-y-5">
      <OAuth />
      <Tabs fullWidth className="w-full">
        <Tab key={"signin"} title="SignIn">
          <LoginAuth />
        </Tab>
        <Tab key={"register"} title="Register">
          <RegisterAuth />
        </Tab>
      </Tabs>
    </div>
  );
}
