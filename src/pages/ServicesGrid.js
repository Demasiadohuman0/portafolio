import React from 'react';
import "./ServicesGrid.css";

const servicesData = [
    { id: 1, name: '1', description: 'Description for service one.', class: 'box-1' },
    { id: 2, name: '2', description: 'Description for service two.', class: 'box-2' },
    { id: 3, name: '3', description: 'Description for service three.', class: 'box-3' },
    { id: 4, name: '4', description: 'Description for service    four.', class: 'box-4' },       
    { id: 5, name: '5', description: 'Description for service five.', class: 'box-5' },
    { id: 6, name: '6', description: 'Description for service six.', class: 'box-6' },
];

const ServicesGrid = () => {
    return (
        <section class="services-section">
            <div class="grid-container">
                {servicesData.map(service => (
                    <div key={service.id} className={`grid-item ${service.class}`}>
                        <img src={service.image} alt={"Imagen de ${service.name}"}/>
                    <div class="text-content">    
                        <h3>{service.name}</h3>
                        {service.description && <p>{service.description}</p>}
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesGrid;