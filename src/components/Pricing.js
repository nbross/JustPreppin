import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/solid";

const PricingCard = ({ title, features }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md p-6 mx-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
      <ul className="mb-6">
        {features.map((feature) => (
          <li key={feature} className="text-secondary text-lg font-bold">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  return (
    <div id="pricing" className="py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="inline-block sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Pricing
          </h2>
          <div className="inline-block">
            <CurrencyDollarIcon className="w-10 inline-block mb-4 text-secondary" />
          </div>
        </div>
        <div className="mt-10">
          <div className="md:flex">
            <div className="md:w-1/2">
              <PricingCard
                title="Items/Products"
                features={[
                  "1 - 499 monthly units - $0.80 per unit",
                  "500 - 999 monthly units - $0.70 per unit",
                  "1,000 - 2,499 monthly units - $0.60 per unit",
                  "2,500 - 4,999 monthly units - $0.50 per unit",
                  "5,000+ monthly units - contact us for a custom quote",
                ]}
              />
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <PricingCard
                title="Boxes"
                features={[
                  "Small Packing Box (12x12x10.5) - $1.25",
                  "Medium Packing Box (14x14x14) - $1.50",
                  "Large Packing Box (16x16x15) - $2.00",
                  "Extra Large Box (18x18x24) - $2.50",
                  "We attempt to use the same boxes we receive the products in to save you money.",
                ]}
              />
            </div>
          </div>
          <div className="mt-10">
            <PricingCard
              title="Other Fees"
              features={[
                "Monthly pallet storage - $30 per pallet",
                "Bundle up to 3 units - $0.80 ($0.05 per additional unit)",
                "Fragile items - $0.80 per unit",
                "Oversized item - $0.85 per unit",
                "Less than 10 units per sku - $0.25 additional per unit",
                "Sticker removal - $0.20 per unit",
                "Inbound pallet - $10",
                "Outbound pallet - $20",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
