"use client";

import { useDisclosure } from "@nextui-org/react";
import AdminCategoryDataTable from "./admin-category-data-table";
import { useState } from "react";

const AdminCategoryPanel = ({ category }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionCategory, setDeletionCategory] = useState();
  return (
    <AdminCategoryDataTable
      categoryData={category}
      onOpen={onOpen}
      setDeletionCategory={setDeletionCategory}
    />
  );
};

export default AdminCategoryPanel;
