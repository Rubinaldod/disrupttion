import { useRouter } from 'next/router';
import { NextUIProvider } from '@nextui-org/react';
import { AiFillMail } from "@react-icons/all-files/ai/AiFillMail";

import Header from "../../components/header";
import Nav from "../../components/nav";

const Details = () => {
    const router = useRouter();

    const idGeted = router.query.id;
    return(
        <NextUIProvider>
            <div className="">
                <Header textColor='text-slate-800' not={true}/>
                <Nav textColor='text-slate-800'/>
                {/* Div com duas divsoes col-2 */}
                <div className="grid grid-cols-2">
                    {/* Div 1 com os pdfs */}
                    <div className='grid grid-cols-2 bg-red-100 p-2'>
                        <div className=''>
                            <iframe  className='bg-sky-100 w-96 h-[600px]'></iframe>
                        </div>

                        <div className='' >
                            <iframe  className='bg-sky-200 w-64 h-64'></iframe>
                        </div>
                    </div>

                    {/* Div 2 com os detalhes de baixar e salvar */}
                    <div className='flex flex-col gap-2 p-2'>
                        <h2>O Sector das Telecomunicações em Angola</h2>
                        <p>5ª EDIÇÃO , PUBLICADO EM ABRIL 22, 2020</p>
                        <div className='flex gap-2'>
                            <div className=' w-56 flex flex-row border-2 rounded-md border-gray-500 items-center justify-center gap-3'>
                                <AiFillMail width={50} height={50}  className='text-gray-600' />
                                <button className='text-gray-600 text-semibold text-lg '>Salvar na biblioteca</button>
                            </div>
                            <div className=' w-56 flex flex-row border-2 rounded-md border-gray-500 items-center justify-center gap-3'>
                                <AiFillMail width={50} height={50}  className='text-gray-600' />
                                <button className='text-gray-600 text-semibold text-lg '>Partilhar</button>
                            </div>
                            <div className=' w-56 flex flex-row border-2 rounded-md border-gray-500 items-center justify-center gap-3'>
                                <AiFillMail width={50} height={50}  className='text-gray-600' />
                                <button className='text-gray-600 text-semibold text-lg '>Abrir no aplicativo</button>
                            </div>
                        </div>
                        {/* Button donwload */}
                        <div className='w-96 mt-4 bg-sky-600 flex flex-row border-2 rounded-full items-center justify-center gap-3'>
                            <AiFillMail width={50} height={50}  className='text-white' />
                            <button className='text-white text-semibold text-lg '>baixe uma versão de avaliação gratuíta</button>
                        </div>
                    </div>
                </div>
            </div>
        </NextUIProvider>
    );
}

export default Details;