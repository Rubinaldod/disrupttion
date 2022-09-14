import Link from 'next/link';

const Nav = ({ textColor }) => (
    <div className='flex flex-col items-center'>
        <div className='border rounded-full mb-3'>
            <input className='w-[100vh] p-3 rounded-full border-none text-lg text-center' name='pesquisar' placeholder='Pesquisar'/> 
        </div>
        <nav className=' mt-2'>
        <ul className='flex flex-row text-xl text-white'>
            <Link href ='/dataanalysis' ><li className={`mx-4 hover:cursor-pointer hover:text-slate-300  ${ textColor ? textColor :  'text-white' }`}>Data  Analysis</li></Link>
            <Link href ='/revista' ><li className={`mx-4 hover:cursor-pointer hover:text-slate-300 ${ textColor ? textColor :  'text-white' }`}>Revista  </li></Link>
            <Link href ='/arquivos' ><li className={`mx-4 hover:cursor-pointer hover:text-slate-300 ${ textColor ? textColor :  'text-white' }`}>Artigos</li></Link>
            <Link href ='/acervo' ><li className={`mx-4 hover:cursor-pointer hover:text-slate-300 ${ textColor ? textColor :  'text-white' }`}>Acervo</li></Link>
            <Link href ='#' ><li className={`mx-4 hover:cursor-pointer hover:text-slate-300 ${ textColor ? textColor :  'text-white' }`}>Podcast</li></Link>
            <Link href ='#' ><li className={`mx-4 hover:cursor-pointer hover:text-slate-300 ${ textColor ? textColor :  'text-white' }`}>Script</li></Link>                   
        </ul>
        </nav>
    </div>
);

export default Nav;