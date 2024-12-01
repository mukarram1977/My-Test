import React from "react";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      icon: "🚗",
      title: "Car Repair",
      description: "Expert car repair services for all types of vehicles.",
    },
    {
      icon: "🛠️",
      title: "Engine Service",
      description: "Comprehensive engine diagnostics and maintenance.",
    },
    {
      icon: "🧼",
      title: "Car Wash",
      description: "High-quality car washing and detailing services.",
    },
    {
      icon: "🔧",
      title: "Tire Replacement",
      description: "Efficient tire replacement and balancing services.",
    },
  ];

  return (
    <div className="services-container">
      {serviceData.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
