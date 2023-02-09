import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from "react-icons/ai"
import {BsInfoCircleFill} from "react-icons/bs"


export default function Header() {
  return (
    <div> 
        <div className="flex justify-between items-center py-4 px-10 bg-black text-white">
             <MenuItem  title= "HOME" address = "/" Icon ={AiFillHome} />
             <MenuItem  title= "HOME" address = "/about" Icon ={BsInfoCircleFill} />
        </div>

        <div className="flex justify-between items-center py-2 px-10 bg-black text-white">


        </div>
    </div>
  )
}
