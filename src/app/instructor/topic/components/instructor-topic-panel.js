"use client";

import { useDisclosure } from "@nextui-org/react";
import InstructorTopicDataTable from "./instructor-topic-data-table";
import { useState } from "react";

const InstructorTopicPanel = ({ topic }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionTopic, setDeletionTopic] = useState();
  return (
    <InstructorTopicDataTable
      topicData={topic}
      onOpen={onOpen}
      setDeletionTopic={setDeletionTopic}
      startsWith={"instructor"}
    />
  );
};

export default InstructorTopicPanel;
