import { NextUIProvider } from '@nextui-org/react';
import Header from "../../components/header";
import Nav from "../../components/nav";
import ListingMagazine from './listingmagazine';

function Revista (){
    const arr = [1,2,3,4,5,6];

    return(
        <NextUIProvider>
            <div className="">
                <Header textColor='text-slate-800' not={true}/>
                <Nav textColor='text-slate-800'/>
                <div className="flex m-8 justify-start flex-wrap">
                    { arr.map((magazine,index) => <ListingMagazine id={index} key={index}/> ) }
                </div>
            </div>
        </NextUIProvider>
    );
};

export default Revista; 