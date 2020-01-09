import React from "react";
import Header from "../Atom/layout/Header";
import Footer from "../Atom/layout/Footer";
import HomeTemplate from "../Template/HomeTemplate";
import HomeView from "../Organism/HomeView";

const Home =() => {
  return (
    <div >
        <HomeTemplate header={<Header/>} homeview={<HomeView/>} footer={<Footer/>}/>
    </div>
  );
};

export default Home;
