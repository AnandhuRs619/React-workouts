import React from 'react';

const ReusableComponent = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {`Item ID: ${item.id}, Name: ${item.name}, Email: ${item.Email}`}
        </div>
      ))}
    </div>
  );
};

export default ReusableComponent;
