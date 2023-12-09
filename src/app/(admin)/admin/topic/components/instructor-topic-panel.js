"use client";

import { useDisclosure } from "@nextui-org/react";
import AdminTopicDataTable from "./instructor-topic-data-table";
import { useState } from "react";

const AdminTopicPanel = ({ topic }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionTopic, setDeletionTopic] = useState();
  return (
    <AdminTopicDataTable
      topicData={topic}
      onOpen={onOpen}
      setDeletionTopic={setDeletionTopic}
    />
  );
};

export default AdminTopicPanel;
