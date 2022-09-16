import React from 'react';
import Link from 'next/link';
import { IconContext } from "@react-icons/all-files";

import Header from '../../components/header';
import Nav from '../../components/nav';
function LeadingPage () {
    return(
        <div className="bg-[url('/bgwithcar.jpg')] object-contain w-full h-screen">
            <Header />
            {/* navigation */}
                <section className=''>
                    <div className='flex flex-col items-center'>
                        <Nav />
                    </div>

                    <div className='flex flex-col items-center mt-6'>
                        <p className='w-[550px] text-6xl text-center text-white '>Disrupttion, a  engenharia   vista  sob perspetiva  angolana</p>
                        <p className='w-[700px] mt-4 text-white text-center text-2xl'>Uma coleção diversificada de dados relevante: artigos e projetos técnico-científicos, monografias teses e muito mais.</p>
                        <button className='w-[98px] p-2 hover:bg-blue-100 mt-8 bg-white rounded-full' name='Explorar' value='Explorar' >Explorar</button>
                    </div>
                </section>
        </div>
    );
}

export default LeadingPage;