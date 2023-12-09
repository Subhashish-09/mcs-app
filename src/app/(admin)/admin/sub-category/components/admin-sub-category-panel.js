"use client";

import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import AdminSubcategoryDataTable from "./admin-sub-category-data-table";

const AdminSubCategoryPanel = ({ subcategory }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionSubCategory, setDeletionSubcategory] = useState();
  return (
    <AdminSubcategoryDataTable
      subCategoryData={subcategory}
      onOpen={onOpen}
      setDeletionSubcategory={setDeletionSubcategory}
    />
  );
};

export default AdminSubCategoryPanel;
