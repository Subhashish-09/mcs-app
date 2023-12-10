"use client";

import { useDisclosure } from "@nextui-org/react";
import AdminPractiseDataTable from "./admin-practise-data-table";
import { useState } from "react";

const AdminPractisePanel = ({ practise }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionPractiseTest, setDeletionPractiseTest] = useState();
  return (
    <AdminPractiseDataTable
      practicesData={practise}
      onOpen={onOpen}
      setDeletionPractiseTest={setDeletionPractiseTest}
    />
  );
};

export default AdminPractisePanel;
