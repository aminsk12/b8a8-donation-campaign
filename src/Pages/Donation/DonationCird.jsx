import { useState } from "react";


const DonationCird = ({ card }) => {

    const { picture, title, category, card_bg, text_bg, price } = card || {}
    


    const cardStyle = {
        backgroundColor: card_bg
    };

    const textStyle = {
        color: text_bg
    };
    const textStyle1 = {
        backgroundColor: text_bg
    };
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md" style={cardStyle}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700" >
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button className="mb-4 py-1 px-4 rounded-lg block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased" style={{ ...cardStyle, ...textStyle }} >
                        {category}
                    </button>

                    <p className="mb-8 block font-sans  font-extrabold text-2xl leading-relaxed text-gray-700 antialiased">
                        {title}
                    </p>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased" style={textStyle}>
                        {price}
                    </h4>
                    <a className="inline-block" href="#">
                        <button
                            className="text-white text-xl font-bold py-1 px-4 rounded-xl"
                            type="button" style={textStyle1}
                        >
                            View Details

                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default DonationCird;