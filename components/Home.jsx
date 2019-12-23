import React,{useEffect,useState} from "react";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Datepicker from './Datepicker';
import Searchindex from './Searchindex';
import './card.css';
import axios from "axios";

const Home =(props) => {
    const [trip,setTrip]=useState(null);
    const[source,setSource]=useState(null);
    const[destination,setDestination]=useState(null);
    const[date,setDate]=useState(null);
    const [city,setCity]=useState([]);

    useEffect(() => {
      axios
      .get(`http://localhost:8080/destination`)
      .then(res=>{
        console.log(res);
         setCity(res.data)})
        .catch(err=>console.log(err));
    }, [])

    const setSourceName = (value)=>{
        setSource(value.destination_Name);
    }

   const setDestinationName=(value)=>{
        setDestination(value.destination_Name);
    }
    var datevalue;
    const setDepatureDate=(date)=>{
           const yyyy =date.getFullYear();
           const mm=date.getMonth()+1;
           const dd=date.getDate();
           datevalue = yyyy+"-"+mm+"-"+dd;
           setDate(datevalue);
    }  

    const search = ()=>{
        if(source === destination){
            alert("source and destination are same")
        }
        else{
         axios
         .get(`http://localhost:8080/trip/${source}/${destination}/${date}`)
         .then(res=>{
             setTrip(res.data)
             props.history.push({pathname:"/Trip", state:{data:res.data}})
         }).catch(err=>console.log(err));
         }}

  return (<div >
      <Header/>

      <div style={{padding:"1px",marginLeft:"35%",marginRight:"35%"}} >  
          <br/>
                    <Searchindex getSource={setSourceName} name="Source" cityDetails={city}/>
              <br/>
                    <Searchindex getSource={setDestinationName} name="Destination" cityDetails={city}/>
              <br/>
                    <Datepicker getDate={(date)=>{setDepatureDate(date)}} name="Select Date"/>
              <br/>
              
                  {
                      (source!=null && destination!=null && date!=null) ?
                     <center> <button className="rainbow"  onClick={search} type="button" disabled={false}> <b>Search</b> </button></center>
                      :<center><button className="rainbow1"   onClick={search} type="button" disabled={true}> Search </button></center> 

                  }  
      </div>
      <Footer/>
  </div>
  );
};

export default Home;
