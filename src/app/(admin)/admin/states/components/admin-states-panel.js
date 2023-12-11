"use client";

import { useDisclosure } from "@nextui-org/react";
import AdminStateDataTable from "./admin-state-data-table";
import { useState } from "react";

const AdminStatesPanel = ({ states }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionState, setDeletionState] = useState();
  return (
    <AdminStateDataTable
      stateData={states}
      onOpen={onOpen}
      setDeletionState={setDeletionState}
    />
  );
};

export default AdminStatesPanel;
