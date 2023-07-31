import { CarProps, FilterProps } from "@types";

export const calculateCat = (min_weight: number, max_life_expectancy: number) => {
  const basePricePerDay = 985; // Base rental price per day in dollars

  // Calculate total rental rate per day
  const catRatePerDay = basePricePerDay + min_weight + max_life_expectancy;

  return catRatePerDay;
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { name, origin, length, max_life, image, offset, playfulness} = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "8e1218d8afmsh1c70abd74942d07p12502cjsnab6ad9679e63" || "",
    "X-RapidAPI-Host": "cats-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cats-by-api-ninjas.p.rapidapi.com/v1/cats?name=${name}&origin=${origin}&length=${length}&max_life_expectancy=${max_life}&image_link=${image}&offset=${offset}&playfulness=${playfulness}`,
    {
      headers: headers,
    }
    
  );



  // Parse the response as JSON
  const result = await response.json();

  return result;
}


