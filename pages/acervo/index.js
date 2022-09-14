import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IconContext } from "@react-icons/all-files";

import Header from '../../components/header';
import Nav from '../../components/nav';
function Acervo () {
    return(
        <div className="bg-[url('/bgwithcar.jpg')] w-screen h-screen">
            <Header />
            {/* navigation */}
                <section className=''>
                    <Nav />
                    <div className='flex flex-col items-center mt-12'>
                        <p className='w-[600px] text-6xl text-center text-white '>Bem-vindo(a) a Disrupttion, o maior acervo de engenharia de Angola.</p>
                        <p className='w-[800px] mt-4 text-white text-center text-xl'><span className='text-blue-500'>6.548.046</span> artigos que qualquer um pode explorar. Uma coleção diversificada de dados relevante: artigos e projetos técnico-científicos, monografias teses e muito mais</p>
                        <button className='w-[98px] p-2 hover:bg-blue-100 mt-4 bg-white rounded-full' name='Explorar' value='Explorar' >Explorar</button>
                    </div>
                </section>
        </div>
    );
}

export default Acervo;