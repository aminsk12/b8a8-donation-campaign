import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { id, picture, title, category, card_bg, text_bg } = service || {}

    const cardStyle = {
        backgroundColor: card_bg
    };
    const textStyle = {
        color: text_bg
    };

    return (
        <div >
            <Link to={`/services/${id}`}>
                <div className="relative flex gap-12 flex-col rounded-xl w-[310px]  shadow-md" style={cardStyle}  >
                    <div className="relative   overflow-hidden rounded-xl  text-gray-700">
                        <img
                            src={picture}
                        />
                    </div>
                    <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                            <p className=" px-2 rounded-lg font-bold text-base font-medium leading-relaxed text-blue-gray-900 antialiased" style={{ ...cardStyle, ...textStyle }}>
                                {category}
                            </p>

                        </div>
                        <p className=" font-sans text-xl font-bold leading-normal text-gray-700 antialiased opacity-75" style={textStyle}>
                            {title}
                        </p>
                    </div>

                </div>
            </Link>

        </div>
    )
};

export default ServiceCard;