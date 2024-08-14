import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="max-w-md p-6 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
