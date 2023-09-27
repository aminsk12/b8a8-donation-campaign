import banner from '../../images/banner.png'

const Banner = () => {
    return (
        <div>
 
            <div className="hero min-h-[70vh]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="">
                        <h1 className=" text-2xl text-black git">I Grow By Helping People In Need</h1>
                        <input className=" py-3 rounded-l-lg lg:pr-52 lg:pl-8 " type="text" placeholder="Search here...." />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;