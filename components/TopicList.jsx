import React from "react";
import Removebtn from "./Removebtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import TestRow from "./TestRow";

const getTopics = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const TopicList = async () => {
  const { topics } = await getTopics();
  console.log(topics);

  return (
    <>
      <div className="my-10  ">
        {/* <h2 className=" text-2xl "> Php_test_mast </h2> */}
        <table className=" mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs mx-10  h-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3"> Email</th>
              <th className="px-6 py-3">Mobile No</th>
              <th className="px-6 py-3">Alternative No</th>
              <th className="px-6 py-3">Creation_date </th>
              <th className="px-6 py-3">last_updation_date </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody className="mt-10">
            {topics.map((test, index) => (
              <TestRow key={test?._id} index={index} test={test} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopicList;
