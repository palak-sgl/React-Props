{
  /* <input type={type} placeholder={placeholder} value={value}  onChange={(e)=>onChange(e.target.value)} className='border' id="input-id"/> */
}
import React from "react";

export default function Input(props) {
  const { placeholder, type, value, onChange } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block mt-2 text-md px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-600  text-gray-900 focus:outline-none mb-8 w-64 transition-all duration-200 hover:bg-gray-50"
        id="input-id"
      />
    </div>
  );
}
