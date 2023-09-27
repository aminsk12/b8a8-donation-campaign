import { Link } from "react-router-dom";
import swal from 'sweetalert';
// কার্ড কম্পোনেন্ট
const Card = ({ service }) => {
    const { id, picture, title, price, description, card_bg, text_bg } = service || {};
    console.log(service);
    const textStyle = {
        backgroundColor: text_bg
    };

    const handelAddToDetails = () => {

        const addToDetailsArry = [];
        const detailsItem = JSON.parse(localStorage.getItem('details'))

        if (!detailsItem) {
            addToDetailsArry.push(service)
            localStorage.setItem('details', JSON.stringify(addToDetailsArry))

        }
        else {

            const isExit = detailsItem.find((service) => service.id === id);

            if (!isExit) {
                addToDetailsArry.push(...detailsItem, service)
                localStorage.setItem('details', JSON.stringify(addToDetailsArry))
                swal("Good job!", "Your donation complited", "success");
            }
            else {
                swal("error!", "No duplicate allow", "error");
            }


        }





    }
    const cardStyle = {
        backgroundColor: card_bg
    };
    return (
        <div className=" min-h-[50vh]  border-2 container mx-auto bg-slate-200 mt-10 max-w-[800px]">







            <div className="">
                <div className="relative">
                    <div className="hero min-h-[50vh] rounded-t-lg" style={{ backgroundImage: `url(${picture})` }}>
                        <div className=" bg-opacity-60"></div>
                    </div>
                    <button className=" py-2 px-4 text-2xl rounded-xl text-white absolute bottom-4 left-4  " onClick={handelAddToDetails} style={textStyle} >{price}</button>
                </div>
                <div className="p-4" >
                    <h1 className="my-5  text-4xl font-bold">{title}</h1>
                    <p className="mb-5 font-bold ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
