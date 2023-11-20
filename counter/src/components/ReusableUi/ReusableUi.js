import React from 'react';
import ReusableComponent from './ReusableComponent'; 
const ReusableUi = () => {
  const data = [
    { id: 1, name: 'Anandhu R S', Email: 'anandhu@gmail.com' },
    { id: 2,  name: 'Manu M', Email: 'Manu@gmail.com' },
    { id: 3,  name: 'Sooraj ', Email: 'Soorajhari@gmail.com' }
  ];

  return (
    <div>
        <div className='items'>
      <h1>Reusable Component Example</h1>
      <ReusableComponent data={data} />
      </div>
    </div>
  );
};

export default ReusableUi;
