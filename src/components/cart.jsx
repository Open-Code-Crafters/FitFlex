import React from "react";

const SuccessStoryCard = ({ image, name, role, company, rating, testimonial }) => {
  return (
    <div className="flex w-full p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
      {/* Top part with image, name, role, and rating */}
      <div className="flex items-center gap-4 text-slate-800">
        <img
          src={image}
          alt={name}
          className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-semibold text-slate-800">{name}</h5>
            <div className="flex items-center gap-0.5">
              {/* Dynamically render the rating stars */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 ${index < rating ? 'text-yellow-600' : 'text-slate-300'}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
            {role} @ {company}
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-6">
        <p className="text-base text-slate-600  leading-normal">
          &quot;{testimonial}&quot;
        </p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
