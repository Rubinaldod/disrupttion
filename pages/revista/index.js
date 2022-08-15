
import Header from "../../components/header";

const Revista = () => (
    <div className="">
        <div className="bg-indigo-500">
            <Header />
        </div>

        <div className="flex flex-row items-center justify-between p-3 bg-gray-100">
            <p className="text-2xl font-bold">REVISTAS</p>
            <input 
                className="p-4 text-sm w-96 rounded-full"
                type="text" 
                name="pesquisar" 
                placeholder="Pesquisar"
            />
            <p>Minha biblioteca</p>
        </div>

        {/* container da revista */}
        <div className="">
            <div className="">Revistas</div>
            <div className="">Info das revistas</div>
        </div>

    </div>
);

export default Revista; 