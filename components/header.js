import React from 'react';
import Image from 'next/image';
import { AiFillMail } from "@react-icons/all-files/ai/AiFillMail";

const Header = ({ textColor, not }) => (
    <div className='flex w-full justify-between items-center p-8'>
        {/* logo and menu */}
        <div className='flex justify-center flex-col'>
            <p className={`text-6xl font-bold ${ textColor ? textColor :  'text-white' }`}>Disrupttion</p>
            <p className={`mt-2  ${ textColor ? textColor :  'text-white' }`}>{ not ? '' : 'Much more than what you expect'}</p>
        </div>
        {/* Profile */}
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center flex-row text-white p-4'>
                <span className='mr-4 text-slate-100' >
                    <AiFillMail width={50} height={50} className={`text-xl hover:translate-y-1 hover:cursor-pointer ease-in-out duration-75 ${ textColor ? textColor :  'text-white' }`}/>
                </span>
               
                    <Image 
                        className='ml-3 object-cover rounded-full border-cyan-400 hover:cursor-pointer hover:border-2 hover:border-cyan-400' 
                        alt='foto de perfil' 
                        width={50}
                        height={50}
                        src='/user.jpg'
                    />
               
                <p className={`ml-3 font-semibold text-lg hover:cursor-pointer hover:translate-y-1 ${textColor?textColor :  'text-white'}`}>Jailson Coluna</p> 
            </div>
                <button className='w-[198px] p-2 hover:bg-slate-100 hover:text-slate-800 ease-in duration-75 bg-white rounded-full text-black border border-slate-300'>
                    Compartilhe seu trabalho
                </button>
        </div>    
    </div>
);

export default Header;