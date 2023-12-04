"use client";
import React from "react";
import Removebtn from "./Removebtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {}
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
              <TestRow
                getTopics={getTopics}
                key={test?._id}
                index={index}
                test={test}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopicList;

export const TestRow = ({ getTopics, test, index }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/topics/?id=${id}`);
      toast.success(" topics deleted successfully");
      if (response.ok) {
        // router.refresh();
      }
    } catch (error) {
      toast.error("Error deleting user:");
    }
  };

  return (
    <tr
      key={test.test_id}
      className={`text-xs mx-10 h-10 text-gray-700 uppercase ${
        test.type === "PHP"
          ? "bg-green-400"
          : test.type === "Node-Js"
          ? "bg-yellow-400"
          : "bg-orange-400"
      }`}
    >
      <td className="px-6 py-3">{index + 1}</td>
      <td className="px-6 py-3">{test?.name}</td>
      <td className="px-6 py-3">{test?.type}</td>
      <td className="px-6 py-3">{test?.email}</td>
      <td className="px-6 py-3">{test?.phone}</td>
      <td className="px-6 py-3">{test?.alternatPhone}</td>
      <td className="px-6 py-3">
        {" "}
        {moment(test?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
      </td>
      <td className="px-6 py-3">
        {" "}
        {moment(test?.updatedAt).format("YYYY-MM-DD HH:mm:ss")}{" "}
      </td>
      <td>
        <Link href={`editTopic/${test?._id}`}>
          <FaEdit size={20} />
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(test?._id)}>
          <MdDelete color="red" size={20} />
        </button>
      </td>
    </tr>
  );
};
