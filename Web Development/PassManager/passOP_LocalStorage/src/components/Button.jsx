import React from 'react';

const Button = ({ naam }) => {
  return (
    <div className="flex justify-center">
      <button className=' hover:bg-green-700 w-auto h-auto p-3 px-5 font-semibold text-2xl rounded-xl m-3 bg-blue-600'>{naam}</button>
    </div>
  );
};

export default Button;
