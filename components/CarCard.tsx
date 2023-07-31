"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCat } from "@utils";
import { CarProps } from "@types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { min_life_expectancy, max_life_expectancy, name, origin, min_weight, max_weight, image_link} = car;

  const [isOpen, setIsOpen] = useState(false);

  const catPrice = calculateCat(min_weight, min_life_expectancy);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {name} 
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {catPrice}
        
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={image_link} alt='car model' fill priority className='width={200} height={200} rounded-full' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full h-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[15px] leading-[17px]'>
              {origin}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{min_weight} - {max_weight} kg</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text"> {min_life_expectancy} - {max_life_expectancy} Years</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
