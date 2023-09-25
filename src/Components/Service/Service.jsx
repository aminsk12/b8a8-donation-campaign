
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [services, setServices] = useState([]);
  console.log(services);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <div className="grid grid-cols-1 my-20 gap-8  md:grid-cols-2 lg:grid-cols-4">
                {
                    services?.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;