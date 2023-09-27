
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";


const Home = () => {


    return (
        <div >
            <Banner></Banner>
          <div className="flex justify-center items-center">
          
           <Services ></Services>
          </div>
        </div>
    );
};

export default Home;