"use client";

import { useDisclosure } from "@nextui-org/react";
import InstructorCategoryDataTable from "./instructor-category-data-table";
import { useState } from "react";

const InstructorCategoryPanel = ({ category }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionCategory, setDeletionCategory] = useState();
  return (
    <InstructorCategoryDataTable
      categoryData={category}
      onOpen={onOpen}
      setDeletionCategory={setDeletionCategory}
    />
  );
};

export default InstructorCategoryPanel;
