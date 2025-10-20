import React from 'react';
import logo from "../assets/image/logo.png"
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
      <img className='w-[350px] pt-5' src={logo} alt="" />
      <p className='text-accent'>Journalism Without Fear or Favour</p>
      <p className='text-accent'>{ format(new Date(), "EEEE , MMMM , dd , yyyy")}</p>
    </div>
  );
};

export default Header;
