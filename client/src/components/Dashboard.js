import React, {useState , useEffect}  from 'react';

const Dashboard = ({setAuth}) => {

    const [name, setName] = useState("");

    const getProfile = async () => {
        try {
          const res = await fetch("http://localhost:5000/dashboard/", {
            method: "GET",
            headers: {  token: localStorage.token }
          });
    
          const parseData = await res.json();
          setName(parseData.user_name);
        } catch (err) {
          console.error(err.message);
        }
      };

      const logout= e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
      } 

      useEffect(() => {
        getProfile();
      });

    return (
        <>
           <h1 className="mt-5">Dashboard</h1>
      <h2>Welcome {name}</h2>
      <button onClick={logout} className="btn btn-primary">
        Logout
      </button>

        </>
    );
};

export default Dashboard;