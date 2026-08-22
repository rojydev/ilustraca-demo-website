import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: "Professional", id: 1 },
    { name: "Accredited Organization", id: 2 },
    { name: "Global Standards", id: 3 },
    { name: "AGIS", id: 4 },
    { name: "Tech Board", id: 5 },
  ];

  return (
    <section className="section partners-section" id="partners">
      <div className="container text-center">
        <h2 className="partners-title">Partners & Accreditations</h2>
        
        <div className="partners-grid">
          {partners.map(partner => (
            <div className="partner-logo" key={partner.id}>
              {/* Placeholder for partner logo */}
              <img src={`https://placehold.co/150x60/ffffff/a0aec0?text=Logo+${partner.id}`} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
