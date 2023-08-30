"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import flightData from "../../flightData.json";
import FlightCards from "@/components/FlightCards";

const page = () => {
  const [flights, setFlights] = useState([])
  const searchParams = useSearchParams();
  const from = JSON.parse(searchParams.get("from"));
  const to = JSON.parse(searchParams.get("to"));
  const date = JSON.parse(searchParams.get("date"));

  useEffect(()=>{
    const shuffle = (array) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    };
  
    const flights = shuffle(flightData)
    setFlights(flights)
  },[])



  return (
    <div className="absolute w-full bg-blue-200">
      <div className="bg-gradient-to-b from-black to-blue-900 w-full h-[20rem]"></div>
      <div className="mx-auto lg:w-[60%] md:w-[80%] w-[90%] flex flex-col gap-20 bg-white absolute shadow-xl py-10 inset-x-0 top-20 border-1 border-gray-400">
        {flights.map((flight) => {
          return <FlightCards flight={flight} from={from.label} to={to.label} date={date} />
        })}
      </div>
    </div>
  );
};

export default page;
