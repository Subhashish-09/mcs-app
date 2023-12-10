"use client";

import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import supabaseClient from "@/lib/supabase/client";
import { useFormik } from "formik";

const ChatPanel = () => {
  const supabase = supabaseClient();
  const [messages, setMessages] = useState();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleMessage(values, resetForm);
    },
  });

  useEffect(() => {
    const fetchPoll = async () => {
      const { data, error } = await supabase.from("chats").select("*");

      if (error) {
        console.error("Error fetching poll:", error.message);
      } else {
        setMessages(data);
      }
    };

    fetchPoll();

    const subscription = supabase
      .channel("chats-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chats",
        },
        () => {
          fetchPoll();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleMessage = async (data, resetForm) => {
    const { data: chats, error } = await supabase
      .from("chats")
      .insert([{ message_text: data.message }])
      .select()
      .single();

    resetForm();

    if (error) {
      console.error("Error updating vote:", error.message);
      return;
    }

    setMessages((prevMessages) => [...prevMessages, chats]);
  };

  return (
    <div className="m-8">
      <div className="w-[324px] border-solid border-blue border-2">
        {messages?.map((message) => (
          <ul>
            <li>{message.message_text}</li>
          </ul>
        ))}
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="flex fixed items-center flex-wrap  bottom-8"
      >
        <Input
          name="message"
          size="sm"
          variant="bordered"
          placeholder="Enter Your Message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
        />

        <Button color="primary" size="lg" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ChatPanel;
