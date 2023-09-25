

const ServiceCard = ({ service }) => {
    
    const { picture, title, category, card_bg } = service || {}

    const cardStyle = {
        backgroundColor: card_bg 
    };
    return (
        <div>
            <div className="relative flex gap-12 flex-col rounded-xl w-[310px]   shadow-md" style={cardStyle}> 
                <div className="relative   overflow-hidden rounded-xl  text-gray-700">
                    <img
                        src={picture}
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {category}
                        </p>

                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {title}
                    </p>
                </div>

            </div>

        </div>
    )
};

export default ServiceCard;