import * as React from "react";

import Routes from "./Routes";

import API from "./services/api/api";

import "./App.css";

import CustomNavbar from "./components/Navbar/CustomNavbar";
import Loading from "./containers/Loading/Loading";

import { AppContext } from "./libs/contextLib";

type TRover = {
  cameras: string[];
  id: number;
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number;
};

const { useState, useEffect } = React;

function App() {
  const [isLoading, setLoading] = useState(true);
  const [rovers, setRovers] = useState<TRover[]>([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      //get the rovers data from API and store in state
      const result = await API.get(`/rovers/`); //fetch rovers
      console.log("result", result.data.rovers);
      setRovers(result.data.rovers);
    } catch (e) {
      alert(e);
    }

    setLoading(false);
  }

  return (
    <div className="App container py-3">
      {!isLoading ? (
        <React.Fragment>
          <CustomNavbar
            bg="light"
            variant="light"
            expand="md"
            brandText="SRover"
          />
          <AppContext.Provider value={{ rovers, setRovers }}>
            <Routes />
          </AppContext.Provider>
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
