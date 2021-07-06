import React, { useState, useEffect, Fragment } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(() => console.log(res))
        .then(data => {
          setUserData(res);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
       {userData.map(item => (
          <div key={item.pk}>
            <h1>{item.username}</h1>
            <p>{item.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;