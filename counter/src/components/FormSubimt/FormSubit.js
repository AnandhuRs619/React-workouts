import React, { useState, useRef } from 'react';


const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!inputValue) {
        setError('Please enter a Name');
        return;
      }
  
      setError('');
  
      console.log('Submitted Value:', inputValue);
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleFocusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <h1>Form Example</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Enter a Name:{inputValue}
              
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef} 
              />
            </label>
          </div>
          <button type="submit">Submit</button>
  
          
          <button type="button" onClick={handleFocusInput}>
            Focus Input
          </button>
  
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    );
  };
  
  export default FormComponent;
  