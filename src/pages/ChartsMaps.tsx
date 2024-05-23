import React from "react";
import { useQuery } from "@tanstack/react-query";
import LineGraph from "../components/LineGraph";
import Map from "../components/Map";
import bgImage from "../assets/corona.jpg";

// Function to fetch COVID-19 historical data
const fetchCovidData = async () => {
  const res = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return res.json();
};

// Function to fetch COVID-19 data for countries
const fetchCountriesData = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  return res.json();
};

const ChartsMaps: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["covidData"],
    queryFn: fetchCovidData,
  });

  const {
    isLoading: isLoadingCountries,
    error: errorCountries,
    data: countriesData,
  } = useQuery({
    queryKey: ["countriesData"],
    queryFn: fetchCountriesData,
  });

  if (isLoading || isLoadingCountries) return <div>Loading...</div>;
  if (error || errorCountries instanceof Error)
    return <div>An error has occurred</div>;

  return (
    <div
      className="h-full w-full bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-xl font-bold my-2 text-center">
        COVID-19 Cases, Deaths, and Recoveries Over Time
      </h2>
      <div className="flex h-3/4 w-full items-center justify-center ">
        {/* Render line graph component */}
        <LineGraph data={data} />
      </div>
      <h2 className="text-xl font-bold mt-4 text-center border-t-2 border-black mx-12">
        COVID-19 Distribution Across the World
      </h2>
      <div className="flex h-3/4 w-full items-center justify-center my-4">
        <div className="w-3/4 h-full mx-auto border-2 border-black">
          {/* Render map component */}
          <Map countriesData={countriesData} />
        </div>
      </div>
    </div>
  );
};

export default ChartsMaps;
