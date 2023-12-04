import EditTopicform from "@/components/EditTopicform";
import React from "react";

const getTopic = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/api/topics/${id}`, {});
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTopic = async ({ params }) => {
  console.log(params);
  const { id } = params;
  const { topic } = await getTopic(id);
  console.log(topic);

  return (
    <div>
      <EditTopicform topic={topic} />
    </div>
  );
};

export default EditTopic;
