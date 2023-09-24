
import ServiceCard from './ServiceCard';

const Service = ({services}) => {

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services?.map(service => (
                        <ServiceCard
                            key={service.id}
                            servive={service}
                        ></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;