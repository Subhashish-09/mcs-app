"use client";

import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import InstructorSubcategoryDataTable from "./instructor-sub-category-data-table";

const InstructorSubCategoryPanel = ({ subcategory }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionSubCategory, setDeletionSubcategory] = useState();
  return (
    <InstructorSubcategoryDataTable
      subCategoryData={subcategory}
      onOpen={onOpen}
      setDeletionSubcategory={setDeletionSubcategory}
    />
  );
};

export default InstructorSubCategoryPanel;
