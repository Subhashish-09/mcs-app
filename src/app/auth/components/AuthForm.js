"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import OAuth from "./OAuth";
import LoginAuth from "./LoginAuth";
import RegisterAuth from "./RegisterAuth";

export function AuthForm() {
  return (
    <div className="w-full space-y-5">
      <OAuth />
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <LoginAuth />
        </TabsContent>
        <TabsContent value="register">
          <RegisterAuth />
        </TabsContent>
      </Tabs>
    </div>
  );
}
