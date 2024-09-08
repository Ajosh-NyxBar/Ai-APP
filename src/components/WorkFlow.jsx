import React from "react";
import { CheckCircle } from "lucide-react";
import codeimg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeimg} alt="codeimg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={item.id} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                <CheckCircle className="mr-2" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
