import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const SubcribePricing = () => {
  return (
    <div className="mt-20">
      <h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8
      tracking-wide"
      >
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-4 w-full md:w-1/3">
            <div className="bg-neutral-900 rounded-lg p-6">
              <p>
                {option.title}
                {option.title === "Pro" ? (
                  <span
                    className="bg-gradient-to-r from-orange-500 to-red-400 
                        text-transparent bg-clip-text text-xl mb-4 ml-2"
                  >
                    (Best Value)
                  </span>
                ) : null}
              </p>
              <p className="text-5xl mt-6 mr-2">
                <span>{option.price}</span>
                <span className="text-xl tracking-tight text-neutral-400">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#"
               className="inline-flex justify-center items-center text-center
               w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg
               transition-all duration-300">
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcribePricing;
