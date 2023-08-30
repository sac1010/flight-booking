import Image from "next/image";
import Link from "next/link";
import React from "react";

const FlightCards = ({ from, to, date, flight }) => {
  return (
    <Link
      href={{
        pathname: "/confirm",
        query: {details:`${JSON.stringify({ from, to, date, flight })}`},
      }}
      className="w-full flex gap-8 items-center hover:bg-gray-100 py-5 cursor-pointer"
    >
      <div className="flex gap-2 w-1/5 justify-center items-center text-sm font-semibold">
        <Image width={40} height={40} src={flight.img} />
        <div>{flight.name}</div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-sm w-1/5">
        <div className="font-semibold text-lg text-center">{from}</div>
        <div className="text-xs">{flight.departure}</div>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center text-sm w-1/5">
        <div className="font-semibold border-b-2 border-green-600">
          {flight.duration}
        </div>
        <div className="text-xs">Non-stop</div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-sm w-1/5">
        <div className="font-semibold text-lg text-center">{to}</div>
        <div className="text-xs">{flight.arrival}</div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-sm w-1/5">
        <div className="font-semibold text-xl">{`${flight.price} Rs`}</div>
      </div>
    </Link>
  );
};

export default FlightCards;
