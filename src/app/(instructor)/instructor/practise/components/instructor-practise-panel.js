"use client";

import { useDisclosure } from "@nextui-org/react";
import InstructorPractiseDataTable from "./instructor-practise-data-table";
import { useState } from "react";

const InstructorPractisePanel = ({ practise }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionPractiseTest, setDeletionPractiseTest] = useState();
  return (
    <InstructorPractiseDataTable
      practicesData={practise}
      onOpen={onOpen}
      setDeletionPractiseTest={setDeletionPractiseTest}
    />
  );
};

export default InstructorPractisePanel;
