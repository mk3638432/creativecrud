"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditTopicform = ({ topic }) => {
  console.log(topic);
  const router = useRouter();
  const { _id, name, type, email, phone, alternatPhone } = topic;

  const [newname, setNewName] = useState(name);
  const [newtype, setNewType] = useState(type);
  const [newemail, setNewEmail] = useState(email);
  const [newphone, setNewPhone] = useState(phone);
  const [newalternatPhone, setNewAlternatPhone] = useState(alternatPhone);
  const options = ["PHP", "Node-Js", "React-Js"];

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newname,
          newtype,
          newemail,
          newphone,
          newalternatPhone,
        }),
      });
      toast.success("Edited successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center  ">
        <form>
          <div className="mt-5">
            <div className="flex gap-[1vw] flex-col	 ">
              <p> Name:</p>
              <input
                className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                type="text"
                name="name"
                value={newname}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter Your First Name"
              />
            </div>

            <div className="mt-3 flex ">
              <div className="flex gap-[1vw] flex-col	 ">
                <p>Email id : </p>
                <input
                  className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                  type="email"
                  name="email"
                  value={newemail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="flex gap-[1vw] flex-col	 ">
              <p> Type:</p>
            </div>
            <select
              className="border border-[#1B1B1B] w-[45vw] rounded-lg p-3"
              value={newtype}
              name="type"
              onChange={(e) => setNewType(e.target.value)}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="flex gap-[1vw] flex-col	 ">
              <p> Mobile_no :</p>
              <input
                className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                type="number"
                name="phone"
                value={newphone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="Enter Your ester_mobile_no"
              />
            </div>
            <div className="flex gap-[1vw] flex-col	 ">
              <p> Alternative Mobile_no:</p>
              <input
                className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                type="number"
                name="alternatPhone"
                value={newalternatPhone}
                onChange={(e) => setNewAlternatPhone(e.target.value)}
                placeholder="Enter Your Alternative No.:"
              />
            </div>
          </div>
        </form>
      </div>
      <div className=" flex justify-center">
        <button
          onClick={handleUpdate}
          className="bg-[#1B1B1B]  w-[20vw] mt-10 text-white font-bold py-2 px-4 "
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditTopicform;
