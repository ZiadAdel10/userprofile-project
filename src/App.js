import { useState, useEffect } from "react";
import axios from "axios";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://randomuser.me/api/");
      const data = response.data.results[0];
      setUserData(data);
    }
    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <ProfilePhoto imageUrl={userData.picture.large} />
      <FullName firstName={userData.name.first} lastName={userData.name.last} />
      <Address address={userData.location} />
    </div>
  );
}

export default App;
