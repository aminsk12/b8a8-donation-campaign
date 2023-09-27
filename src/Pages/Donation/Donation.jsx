import { useEffect, useState } from "react";
import DonationCird from "./DonationCird";


const Donation = () => {

    const [donation, setDonation] = useState([]);

    const [noFound, setNoFound] = useState(false);
    const [isSow, setIsSiw] = useState(false);

    useEffect(() => {
        const detailsItem = JSON.parse(localStorage.getItem('details'));

        if (detailsItem) {
            setDonation(detailsItem)
        }
        else {
            setNoFound('No data found')
        }
    }, [])


    const handelRemoov = () => {
        localStorage.clear()
        setDonation([])
        setNoFound('No data found')
    }


    return (

        <div >
            {

                 noFound ?( <p  className=" flex items-center justify-center h-[75vh] text-5xl font-bold ">{noFound}</p>)
                :
                (<div>
                    {donation.length > 0 && <button type="button" className="  block mx-auto text-white rounded-md mt-10 text-2xl font-bold bg-red-500 py-1 px-4" onClick={handelRemoov}>Delete All Donation</button>}
                    <div className=" grid grid-cols-1 my-20 gap-8 lg:grid-cols-2 container mx-auto">
                        {
                       isSow ? donation.map((card => <DonationCird key={card.id} card={card}></DonationCird>))
                        :
                        donation.slice(0,4).map((card => <DonationCird key={card.id} card={card}></DonationCird>))
                        }

                    </div>
                </div>
            )}
              {donation.length > 4 && <button className="  block mx-auto text-white rounded-md mt-10 text-2xl font-bold bg-red-500 py-1 px-4" onClick={() => setIsSiw(!isSow)}>{isSow ? "SeeLess" : "See More"}</button>}          
        </div >
    );
};

export default Donation;