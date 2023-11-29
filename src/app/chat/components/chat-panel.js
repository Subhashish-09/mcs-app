"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import supabaseClient from "@/lib/supabase/client";

const FormSchema = z.object({
  message: z.string().min(1),
});

const ChatPanel = ({ userId }) => {
  const supabase = supabaseClient();
  const [messages, setMessages] = useState();

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

  const handleMessage = async (data) => {
    const { data: chats, error } = await supabase
      .from("chats")
      .insert([{ message_text: data.message }])
      .select()
      .single();

    form.reset({
      message: "",
    });

    if (error) {
      console.error("Error updating vote:", error.message);
      return;
    }

    setMessages((prevMessages) => [...prevMessages, chats]);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: "",
    },
  });

  return (
    <>
      {" "}
      {messages?.map((message) => (
        <ul>
          <li>{message.message_text}</li>
        </ul>
      ))}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleMessage)}
          className="w-full space-y-6 flex fixed bottom-0"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input
                    variant="bordered"
                    placeholder="Enter Your Message"
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button color="primary" type="submit" className=" flex gap-2">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ChatPanel;
