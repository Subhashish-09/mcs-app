"use client";

import { useEffect, useState } from "react";
import supabaseClient from "@/lib/supabase/client";

const PollComponent = ({ pollId, polls }) => {
  const [poll, setPoll] = useState(polls);

  const supabase = supabaseClient();

  useEffect(() => {
    const fetchPoll = async () => {
      const { data, error } = await supabase
        .from("polls")
        .select("*")
        .eq("id", pollId)
        .single();

      if (error) {
        console.error("Error fetching poll:", error.message);
      } else {
        setPoll(data);
      }
    };

    const subscription = supabase
      .channel("polls-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "polls",
        },
        () => {
          fetchPoll();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [pollId]);

  const handleVote = async (optionId) => {
    const { data: polls, error } = await supabase
      .from("polls")
      .select("*")
      .eq("id", pollId)
      .single();

    if (error) {
      console.error("Error fetching updated poll data:", error.message);
      return;
    }

    const existingVotes = polls.votes || {};

    existingVotes[optionId] = (existingVotes[optionId] || 0) + 1;

    const { error: updateError } = await supabase
      .from("polls")
      .update({ votes: existingVotes })
      .eq("id", pollId);

    if (updateError) {
      console.error("Error updating vote:", updateError.message);
    }

    setPoll((prevPoll) => ({
      ...prevPoll,
      votes: existingVotes,
    }));
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((option) => (
          <li key={option.id}>
            {option.text} - {poll.votes[option.id] || 0}{" "}
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollComponent;
