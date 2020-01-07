import React from "react";
import Header from "../Atom/layout/Header";
import TripTemplate from "../Template/TripTemplate";
import Trip from "../Organism/Trip";

const TripPage =(props) => {
  return (
    <div >
        <TripTemplate header={<Header/>} tripView={<Trip tripdetails={props.location.state.data} />}/>
    </div>
  );
};

export default TripPage;
