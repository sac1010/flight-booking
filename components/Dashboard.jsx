"use client";
import React, { useEffect, useState } from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import HomeIcon from "@mui/icons-material/Home";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import TrainIcon from "@mui/icons-material/Train";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Select from "react-select";
import airports from "../airports.json";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/navigation";

let services = [
  { name: "Flights", icon: AirplanemodeActiveIcon, selected: true },
  { name: "Hotels", icon: LocalHotelIcon },
  { name: "Homestays", icon: HomeIcon },
  { name: "Holiday", icon: ParaglidingIcon },
  { name: "Trains", icon: TrainIcon },
  { name: "Buses", icon: AirportShuttleIcon },
  { name: "Cabs", icon: LocalTaxiIcon },
  { name: "Forex", icon: CurrencyExchangeIcon },
  { name: "Gift Cards", icon: CardGiftcardIcon },
];

const Dashboard = () => {
  const [formattedAirports, setAirports] = useState([]);
  const [date, setDate] = useState();
  const [to, setTo] = useState(null);
  const [from, setFrom] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const air = airports.map((airport) => {
      return {
        label: airport.city,
        value: airport.code,
        country: airport.country,
        name:airport.name
      };
    });
    setAirports(air);
  }, []);


  const handleClick  = ()=>{
    if(!date || !to || !from){
      alert("please fill the required fields")
      return
    }
    router.push(`/flights?date=${JSON.stringify(date)}&from=${JSON.stringify(from)}&to=${JSON.stringify(to)}`)
  }
  return (
    <div className="xl:px-60 lg:px-40 px-10 h-screen w-full bg-gradient-to-b from-black to-blue-900 flex items-center justify-center">
      <div className="w-full h-2/4 bg-white rounded-2xl relative flex items-center justify-center">
        <div className="w-3/4 h-[5rem] sm:flex hidden justify-between items-center px-4 shadow-xl absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl">
          {services.map((service) => {
            return (
              <div key={service.icon} className="flex items-center justify-center flex-col gap-2">
                <service.icon color={service.selected ? "primary" : ""} />
                <div className="text-sm ">{service.name}</div>
              </div>
            );
          })}
        </div>
        <div className="md:flex-row flex-col flex border items-center p-2 justify-around border-gray-400 mx-12 rounded-xl h-[14rem] w-full">
          <div className="md:w-[18rem] w-full">
            <Select
              placeholder="From"
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              formatOptionLabel={(option) => {
                return (
                  <div>
                    <div className="font-semibold">{option.label}</div>
                    <div>{`${option.name},${option.country}`}</div>
                  </div>
                );
              }}
              defaultValue={from}
              onChange={setFrom}
              options={formattedAirports}
            />
          </div>
          <MultipleStopIcon />
          <div className="md:w-[18rem] w-full">
            <Select
              placeholder="To"
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              formatOptionLabel={(option) => {
                return (
                  <div>
                    <div className="font-semibold">{option.label}</div>
                    <div>{option.country}</div>
                  </div>
                );
              }}

              defaultValue={to}
              onChange={setTo}
              options={formattedAirports}
            />
          </div>
          <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker 
        
          label="Departure"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
          </div>
        </div>
        <button onClick={handleClick} className="bg-[#53b2fe] hover:bg-[#4aa5ef] px-12 py-4 rounded-full w-fit text-white font-bold text-xl absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          search
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
