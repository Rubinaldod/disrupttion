import React from 'react';
import Image from 'next/image';
import { GrMailOption } from "@react-icons/all-files/gr/GrMailOption";


const Header = () =>(
    <div className='flex w-full justify-between items-center p-8'>
        {/* logo and menu */}
        <div>
            <p className='text-6xl font-bold text-white'>Disrupttion</p>
            <p className='mt-2 text-white'>Much more than what you expect.</p>
        </div>
        {/* Profile */}
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center flex-row text-white p-4'>
                <span className='mr-4 text-white' >
                    <GrMailOption width={20} height={20}/>
                </span>
                <Image 
                    className='ml-3 object-cover border boder-white-500 rounded-full' 
                    alt='foto de perfil' 
                    width={50}
                    height={50}
                    src='/user.jpg'
                />
                <p className='ml-3 text-white'>Jailson Coluna</p> 
            </div>
                <button className='w-[198px] p-2 hover:bg-blue-100 bg-white rounded-full text-black'>
                    Compartilhe seu trabalho
                </button>
        </div>    
    </div>
);

export default Header;