"use client";
import ConfirmCard from "@/components/ConfirmCard";
import { TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get("details"));
  useEffect(() => {
    console.log(data, "data");
  }, [data]);
  return (
    <div className="lg:w-[60%] md:w-[80%] w-[90%] mx-auto my-10">
      <ConfirmCard data={data} />
      <div className="mt-6 w-full bg-white p-6 shadow-xl">
        <div className="font-semibold text-lg">Passenger Details</div>
        <div className="flex w-full gap-4 mt-4">
          <TextField
            className="w-1/2"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            className="w-1/2"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            type="number"
            className="w-1/2"
            id="outlined-basic"
            label="age"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
