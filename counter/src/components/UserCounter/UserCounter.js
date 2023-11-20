import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CounterWithUser = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [count]);

  return (
    <div>
      <h1>Counter with User Information</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <span> Count: {count} </span>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <div>
        {loading && <p>Loading user information...</p>}
        {error && <p>Error loading user information: {error.message}</p>}
        {user && (
          <div>
            <h2>User Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterWithUser;
