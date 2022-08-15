import React from 'react';
import Link from 'next/link';
import { IconContext } from "@react-icons/all-files";

import Header from '../../components/header';

function LeadingPage () {
    return(
        <div className="bg-[url('/bgwithcar.jpg')] object-contain w-full h-screen">
            <Header />
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
                        <p className='w-[550px] text-6xl text-center text-white '>Disrupttion, a  engenharia   vista  sob perspetiva  angolana</p>
                        <p className='w-[500px] mt-4 text-white text-center text-lg'>Uma coleção diversificada de dados relevante: artigos e projetos técnico-científicos, monografias teses e muito mais.</p>
                        <button className='w-[98px] p-2 hover:bg-blue-100 mt-8 bg-white rounded-full' name='Explorar' value='Explorar' >Explorar</button>
                    </div>
                </section>
        </div>
    );
}

export default LeadingPage;