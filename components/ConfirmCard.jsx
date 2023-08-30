import Image from "next/image";
import React from "react";

const ConfirmCard = ({ data }) => {
  function formatDateToDDMMYYYY(isoDateString) {
    const isoDate = new Date(isoDateString);
    const day = isoDate.getUTCDate();
    const month = isoDate.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
    const year = isoDate.getUTCFullYear();

    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}/${year}`;
    return formattedDate;
  }
  return (
    <div className="w-full bg-white  shadow-xl ">
      <div className="px-4 py-2 border-l-4  border-green-700">
        <div className="font-bold text-xl ">
          {data.from} → {data.to}
        </div>
        <div>{formatDateToDDMMYYYY(data.date)}</div>
      </div>
      <div className="flex gap-4 my-2 items-center ">
        <Image alt="image" src={data.flight.img} width={40} height={40} />
        <div className="font-bold ">{data.flight.name}</div>
      </div>
      <div className="w-full h-[10rem] flex items-center justify-between bg-blue-50 p-4">
        <div className="flex-col flex">
          <div className="flex gap-3">
            <div className="font-bold">{data.flight.departure}</div>
            <div>{data.from}</div>
          </div>
          ↓<div className="flex">{data.flight.duration}</div>↓
          <div className="flex gap-3">
            <div className="font-bold">{data.flight.arrival}</div>
            <div>{data.to}</div>
          </div>
        </div>
        <div className="">
          Baggage
          <div className="font-bold">Adult</div>
        </div>
        <div>
          <div>Check-in</div>
          <div className="font-bold">15kgs</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCard;
