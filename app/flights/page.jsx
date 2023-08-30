"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const from = JSON.parse(searchParams.get("from"));
  const to = JSON.parse(searchParams.get("to"));
  // const date = JSON.parse(searchParams.get("date"));



  return <div></div>;
};

export default page;
