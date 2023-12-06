"use client";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export const TestRow = ({ test, index }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/topics/?id=${id}`);
      toast.success(" topics deleted successfully");

      router.refresh();
    } catch (error) {
      console.log(error);
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

export default TestRow;
