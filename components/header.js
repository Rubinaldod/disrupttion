import React from 'react';
import Image from 'next/image';
import { GrMailOption } from "@react-icons/all-files/gr/GrMailOption";

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
                <span className='mr-4 text-white' >
                    <GrMailOption width={20} height={20} className={ textColor ? textColor :  'text-white' }/>
                </span>
                <Image 
                    className='ml-3 object-cover border boder-white-500 rounded-full' 
                    alt='foto de perfil' 
                    width={50}
                    height={50}
                    src='/user.jpg'
                />
                <p className={`ml-3 font-semibold text-lg ${textColor?textColor :  'text-white'}`}>Jailson Coluna</p> 
            </div>
                <button className='w-[198px] p-2 hover:bg-slate-100 hover:text-slate-800 ease-in duration-75 bg-white rounded-full text-black border border-slate-300'>
                    Compartilhe seu trabalho
                </button>
        </div>    
    </div>
);

export default Header;