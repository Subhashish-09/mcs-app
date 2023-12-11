"use server";

import { supabaseServer } from "@/lib/supabase/server";
import cryptoRandomString from "crypto-random-string";

const supabase = await supabaseServer();

const CreatePractise = async (form, status) => {
  const { error } = await supabase.from("practise").insert([
    {
      practise_id:
        "PQZ_" + cryptoRandomString({ length: 13, type: "url-safe" }),

      practise_name: form["practiseName"],
      practise_category: form["category"],
      practise_sub_category: form["subCategory"],
      practise_topic: form["topic"],
      practise_is_active: form["practiseIsActive"],
      practise_status: status,
      practise_published_at:
        form["status"] !== "SCHEDULE" ? new Date() : form["date"],
      practise_seo_title: form["practiseSeoTitle"],
      practise_seo_description: form["practiseSeoDescription"],
      practise_seo_keywords: form["practiseSeoKeyWords"],
      practise_seo_slug: form["practiseSeoSlug"],
    },
  ]);

  return error;
};

const EditPractise = () => {};

const UploadPractiseQuestions = () => {};

export { CreatePractise, EditPractise, UploadPractiseQuestions };
