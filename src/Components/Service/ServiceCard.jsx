

const ServiceCard = ({ service }) => {
    console.log(service);
    const { picture, title, category } = service || {}
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl shadow-slate-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                    />
                </div>
                <div className="p-6">
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {category}
                    </p>
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                    </div>

                </div>
            </div>,
        </div>
    )
};

export default ServiceCard;