import React from 'react'

interface ChoiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;

}


const ChoiceCard = ({ title, description, icon,className }: ChoiceCardProps) => {
  return (
    <>
      <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full bg-white text-[#222]">

        <div className={`flex items-center gap-x-4 p-5 ${className}`}>
          <span className="text-[#3da1bf] text-5xl rounded-full bg-teal-50 p-4">
            {icon}
          </span>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="mt-2 text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </>
  );

};

export default ChoiceCard