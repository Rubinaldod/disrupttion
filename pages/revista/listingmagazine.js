import { useRouter } from 'next/router';

const ListingMagazine = ({ image, title, description, id }) => {
    const router = useRouter();

    const onRedirect = () => {
       //Got to page /revista/[id].js
       router.push({
        pathname:'revista/[id]',
        query: { id: id }
       });
    }

   return(
        <div className="flex flex-col items-start mr-6 mt-14">
            <div className="w-80 h-96 bg-red-100">
                Image magazine
            </div>
            <h3 className="mt-2 w-72 text-gray-600 text-justify">Edição 05: Telecomunicações em Angola</h3>
            <p className="w-72 text-justify text-gray-500">Nosso mundo nunca esteve tão conectado, e com isso vem uma compreensão maior sobre o impacto de nossas escolhas…</p>
            <button onClick={ onRedirect } className="w-40 mt-2 bg-sky-800 text-white p-2 rounded-full">Leia mais</button>
        </div>
   ); 
}

export default ListingMagazine;