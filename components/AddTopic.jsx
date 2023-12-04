"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    type: "",
    email: "",
    phone: "",
    alternatPhone: "",
  });
  const [error, setError] = useState({});
  const options = ["PHP", "Node-Js", "React-Js"];
  const handleValidation = (data) => {
    const error = {};
    if (!data?.name) {
      error.error = true;
      error.name = "Invalid Name";
    }
    if (!data?.type) {
      error.error = true;
      error.type = "Invalid type";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.email)) {
      error.error = true;
      error.email = "Invalid Email";
    }
    if (!data?.phone || data.phone.toString().length !== 10) {
      error.error = true;
      error.phone = " Phone Number Must have 10 digit";
    }

    if (!data.alternatPhone || data.alternatPhone.toString().length !== 10) {
      error.error = true;
      error.alternatPhone = "Phone Number Must have 10 digits";
    }

    if (data.phone === data.alternatPhone) {
      error.error = true;
      error.alternatPhone = "Phone Number Cannot be the same";
    }

    return error;
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validation = handleValidation(data);
      setError(validation);
      if (validation.error) {
        return;
      }
      const response = await axios.post("/api/topics", data);

      setData({
        name: "",
        type: "",
        email: "",
        phone: "",
        alternatPhone: "",
      });

      //   toast.success(`User registered successfully!!!`);
      router.push("/");
      await fetchData();
    } catch (error) {
      //   toast.error(error.response.data.error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center  ">
        <form>
          <div className="mt-5">
            <p className="flex gap-[1vw] flex-col	 ">
              <p> Name:</p>
              <input
                className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                type="text"
                name="name"
                value={data?.name}
                onChange={handleChange}
                placeholder="Enter Your First Name"
              />
            </p>
            <p className="text-red-600"> {error?.name} </p>
            <p className="flex gap-[1vw] flex-col	 ">
              <p> Type:</p>
              <select
                className="border border-[#1B1B1B] w-[45vw] rounded-lg p-3"
                value={data?.type}
                name="type"
                onChange={handleChange}
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </p>
            <p className="text-red-600"> {error?.type} </p>

            <div className="mt-3 flex ">
              <p className="flex gap-[1vw] flex-col	 ">
                <p>Email id : </p>
                <input
                  className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                  type="email"
                  name="email"
                  value={data?.email}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                />
              </p>
            </div>
            <p className="text-red-600"> {error?.email} </p>

            <p className="flex gap-[1vw] flex-col	 ">
              <p> Mobile_no :</p>
              <input
                className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                type="number"
                name="phone"
                value={data?.phone}
                onChange={handleChange}
                placeholder="Enter Your ester_mobile_no"
              />
            </p>
            <p className="text-red-600"> {error?.phone} </p>
            <p className="flex gap-[1vw] flex-col	 ">
              <p> Alternative Mobile_no:</p>
              <input
                className="border border-[#1B1B1B]  w-[45vw] rounded-lg p-3 "
                type="number"
                name="alternatPhone"
                value={data?.alternatPhone}
                onChange={handleChange}
                placeholder="Enter Your Alternative No.:"
              />
            </p>
            <p className="text-red-600"> {error?.alternatPhone} </p>
          </div>
        </form>
      </div>
      <div className=" flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#1B1B1B]  w-[20vw] mt-10 text-white font-bold py-2 px-4 "
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddTopic;
