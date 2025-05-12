
import React from 'react';

const PromoStrip: React.FC = () => {
  return (
    <div className="bg-apple-lightgray py-3 text-center">
      <p className="text-sm text-apple-black">
        Get up to 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*
        <a href="#" className="text-apple-blue ml-1 hover:underline">
          Learn more &gt;
        </a>
      </p>
    </div>
  );
};

export default PromoStrip;
