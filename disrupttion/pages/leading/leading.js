import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrMailOption } from "@react-icons/all-files/gr/GrMailOption";
import { IconContext } from "@react-icons/all-files";

function LeadingPage () {
    return(
        <div className="bg-[url('/bgwithcar.jpg')] object-contain w-full h-screen">
            
            <div className='flex w-full justify-between items-center p-20'>
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
                        <Image className='ml-3 object-cover border boder-white-500 rounded-full' 
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
            {/* navigation */}
                <section className=''>
                    <div className='flex flex-col items-center'>
                        <input className='w-[100vh] p-3 rounded-full border-none text-lg' name='pesquisar' placeholder='Pesquisar'/> 
                        <nav className=' mt-2'>
                            <ul className='flex flex-row text-xl text-white'>
                                <Link href ='/' ><li className='mx-4 hover:cursor-pointer hover:text-slate-300'>Data  Analysis</li></Link>
                                <Link href ='/' ><li className='mx-4 hover:cursor-pointer hover:text-slate-300'>Revista  </li></Link>
                                <Link href ='/' ><li className='mx-4 hover:cursor-pointer hover:text-slate-300'>Artigos</li></Link>
                                <Link href ='/' ><li className='mx-4 hover:cursor-pointer hover:text-slate-300'>Acervo</li></Link>
                                <Link href ='/' ><li className='mx-4 hover:cursor-pointer hover:text-slate-300'>Podcast</li></Link>
                                <Link href ='/' ><li className='mx-4 hover:cursor-pointer hover:text-slate-300'>Script</li></Link>                   
                            </ul>
                        </nav>
                    </div>

                    <div className='flex flex-col items-center mt-20'>
                        <p className='w-[550px] text-5xl text-center text-white '>Disrupttion, a  engenharia   vista  sob perspetiva  angolana</p>
                        <p className='w-[500px] mt-4 text-white text-center text-base'>Uma coleção diversificada de dados relevante: artigos e projetos técnico-científicos, monografias teses e muito mais.</p>
                        <button className='w-[98px] p-2 hover:bg-blue-100 mt-8 bg-white rounded-full' name='Explorar' value='Explorar' >Explorar</button>
                    </div>
                </section>
        </div>
    );
}

export default LeadingPage;