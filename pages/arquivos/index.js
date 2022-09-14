import React,{ useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropdown } from "@react-icons/all-files/Io/IoIosArrowDropdown";
import { FiSearch } from '@react-icons/all-files/Fi/FiSearch';

import Header from '../../components/header';

export default function Artigos(){
    const arr = [{
        id:1,
    },{
        id:2,
    },{
        id:3,
        image:'/bgwihtcar.jpg'
    }];

    const Card = ({ image }) => (
      
                <div className='bg-gray-100 w-[450px] rounded-lg p-5 shadow-2xl'>
                    {image ? <Image className='rounded-sm' width='100%'height='100%'layout="responsive" objectFit="contain" alt='imagem do arquivo' src='/bgwithcar.jpg'/> : ''}
                    <p className='text-2xl font-semibold text-slate-800'>Análise da Viabilidade Técnica e Financeira para Implementação de uma Central Eólica</p>
                    
                    <div className='flex flex-row items-center gap-5 mt-4'>
                        <p className='text-sm font-semibold text-gray-500 hover:cursor-pointer'>Jailson Coluna</p>
                        <p className='text-sm  text-gray-500 hover:cursor-pointer'>{'Abril'+','+new Date().getDay()+','+new Date().getFullYear()}</p>
                        <p className='text-sm  text-gray-500 hover:cursor-pointer'>Monografia</p>
                    </div>

                    <div className=''>
                        <p className='mt-4 text-xl font-semibold text-sky-500'>Resumo</p>
                        <p className='mt-1 text-lg text-justify text-gray-500'>A fonte energia eólica é uma das alternativas 
                            renováveis que mais vem se desenvolvendo nos 
                            últimos anos. Esta fonte de energia tem ganhado 
                            algum destaque a nível global, tornando-se muito 
                            importante para os seres humanos, atendendo as 
                            vantagens associadas ao alcance de algumas 
                            metas para a redução da emissão de dióxido de 
                            carbono. Com o esgotamento das fontes 
                            tradicionais de geração de energia elétrica, surge o 
                            interesse pela exploração e investimento desta 
                            nova forma de geração de energia elétrica. Dentro 
                            deste novo panorama, o mundo segue em busca 
                            do desenvolvimento dessa forma de geração, com 
                            vista a sustentabilidade e eficiência energética . . .
                        </p>
                    </div>
                </div>
      
    )
    return(
        <div className="">
            <Header textColor='text-slate-900' not={true}/>
            {/* Search section */}
            <div className=''>
                <div className='w-screen flex justify-center'>
                    <div className=' flex p-2 justify-between border border-slate-200 w-[800px] rounded-full'>
                        <input type='text' placeholder='Pesquisar' className='focus-within:border-none ml-4 w-[500px] border-none text-lg'/>
                        <FiSearch size={30} className='text-slate-500 mr-2'/>
                    </div>

                    <div className='flex flex-row items-center gap-3 ml-6'>
                        <p className='text-slate-500 text-lg'>Minha biblioteca</p>
                        <IoIosArrowDropdown size={20} className='text-slate-500'/>
                    </div>
                </div>
               
            </div>
            {/* Navigation of archives */}
            <nav className='flex justify-center mt-5 '>
                <ul className='flex gap-5 list-none text-lg text-slate-500 items-center'>
                    <li className='hover:text-slate-900 hover:cursor-pointer'>Acervo científico</li>
                    <li className='hover:text-slate-900 hover:cursor-pointer'>Monografia</li>
                    <li className='hover:text-slate-900 hover:cursor-pointer'>Tese dissertação</li>
                    <li className='hover:text-slate-900 hover:cursor-pointer'>Projecto tecnológico</li>
                    <button className='border p-2 rounded-full hover:bg-gray-100'>Exibir tudo</button>
                </ul>
            </nav>
            {/* show archives */}
            <div className='flex w-screen gap-6 p-6 mt-8'>
                {arr.map((card,index) => <Card key={index} image={card.image}/>)}
            </div>

        </div>
    );
}