import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const Service = () => {

    const [service, setService] = useState({})
    const servic = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id)
    
    useEffect(()=>{
        const finServic = servic?.find(servic => servic.id === idInt);
        setService(finServic)
    },[idInt, servic])
 

    return (
        <div className=" container mx-auto ">
            <Card service={service}></Card>

        </div>
    );
};

export default Service;