import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Service from "../../Components/Service/Service";


const Home = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div>
          <Banner></Banner>
           <Service services={services}></Service>
        </div>
    );
};

export default Home;