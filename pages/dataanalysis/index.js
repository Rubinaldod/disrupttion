import Link from 'next/link';
import Image from 'next/image';

import Nav from '../../components/nav';
import Header from '../../components/header';

function DataAnalysis (){
    return(
        <div className="object-contain w-full h-auto">
            <Header textColor='text-slate-900' not={true}/>
            <Nav textColor='text-slate-700'/>
            
            <div className=''>

            </div>
            
            <div className='bg-slate-100'>
                <div className='w-[400px] bg-red-100'>
                    <p className=''>Sustentabilidade ambiental face ao surgimento da industria 4.0</p>
                    <div className=''>
                        <p>Jailson Coluna</p>
                        <p>abril 22 2022</p>
                    </div>
                    {/* like section */}
                    <div className=''>
                        <div className=''>
                            <p>ButtonLike</p>
                            <p>Likes</p>
                        </div>

                        <div className=''>
                            <p>ButtonEye</p>
                            <p>Likes</p>
                        </div>

                        <div className=''>
                            <p>ButtonShare</p>
                            <p>Likes</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                
                </div>

                <div className=''>
                
                </div>

                <div className=''>
                
                </div>
                
                <div className=''>
                
                </div>
            </div>

        </div>
    );
}

export default DataAnalysis;