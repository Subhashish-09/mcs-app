"use client";

import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import AdminQuizDataTable from "./admin-quiz-data-table";

const InstructorQuizPanel = ({ quiz }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionQuiz, setDeletionQuiz] = useState();

  return (
    <AdminQuizDataTable
      quizData={quiz}
      onOpen={onOpen}
      setDeletionQuiz={setDeletionQuiz}
    />
  );
};

export default InstructorQuizPanel;
