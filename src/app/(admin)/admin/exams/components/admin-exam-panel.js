"use client";

import AdminExamDataTable from "./admin-exam-data-table";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";

const AdminExamPanel = ({ exams }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionExam, setDeletionExam] = useState();

  return (
    <AdminExamDataTable
      examData={exams}
      onOpen={onOpen}
      setDeletionExam={setDeletionExam}
    />
  );
};

export default AdminExamPanel;
