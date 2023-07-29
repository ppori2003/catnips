import { MouseEventHandler } from "react";

export interface CarProps {
  name:string;
  length:string;
  origin:string;
  image_link:string;
  family_friendly:number;
  shedding:number;
  general_health:number;
  playfulness:number;
  meowing:number;
  children_friendly:number;
  stranger_friendly:number;
  grooming:number;
  intelligence:number;
  other_pets_friendly:number;
  min_weight:number;
  max_weight:number;
  min_life_expectancy:number;
  max_life_expectancy:number;
 
}

export interface FilterProps {
  name: string;
  origin: string;
  length: string;
  max_life: number;
  image: string;
  playfulness: number;
  offset: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  min_life_expectancy:number;
  max_life_expectancy:number;
  name: string;
  origin: string;
  min_weight:number;
  max_weight:number;
  image_link:string;

}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  value: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  name: string;
  setName: (name: string) => void;
}
