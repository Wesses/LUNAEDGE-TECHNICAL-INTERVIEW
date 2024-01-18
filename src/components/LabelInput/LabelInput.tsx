import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

type Props = {
  placeholder: string;
  text: String;
};

export const LabelInput: React.FC<Props> = ({ text, placeholder }) => {
  return (
    <label className="flex flex-col max-w-64 gap-y-2">
      <div className="flex gap-x-1">
        {text}

        <InformationCircleIcon className="w-6 h-6 text-[#000]"/>
      </div>
        
      <input
        className="rounded-lg py-3 px-4 outline outline-2 outline-[#a5a8a8] hover:outline-[#000] focus:outline-[#000]"
        type="text"
        placeholder={placeholder}
      />

    </label>
  );
};
