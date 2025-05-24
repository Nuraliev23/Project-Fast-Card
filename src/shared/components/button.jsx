import React from 'react'
import { NavLink } from 'react-router'

const Button = ({text}) => {
  return (
     <NavLink to="/products">
    <button className='bg-[#DB4444] p-[16px_48px] text-[white] rounded-[5px] text-center'>
    {text}
      </button>
     </NavLink>
  )
}

export default Button