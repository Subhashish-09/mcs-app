"use client";

import { useDisclosure } from "@nextui-org/react";
import AdminClassDataTable from "./admin-class-data-table";
import { useState } from "react";

const AdminClassPanel = ({ classes }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionCategory, setDeletionCategory] = useState();
  return (
    <AdminClassDataTable
      classData={classes}
      onOpen={onOpen}
      setDeletionClass={setDeletionCategory}
    />
  );
};

export default AdminClassPanel;
