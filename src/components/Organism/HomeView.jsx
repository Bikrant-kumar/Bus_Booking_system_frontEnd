import React,{useEffect,useState} from 'react';
import SearchDiv from '../Molecule/SearchBox/SearchDiv';
import axios from "axios";
import {withRouter} from "react-router-dom";

const HomeView =(props)=> {

    const[source,setSource]=useState("");
    const[destination,setDestination]=useState("");
    const[date,setDate]=useState("");
    const [city,setCity]=useState([]);

    useEffect(() => {
      axios
      .get(`http://localhost:8080/destination`)
      .then(res=>{
        console.log(res);
         setCity(res.data)})
        .catch(err=>console.log(err));
    }, [])

    const getSourceName = (value)=>{
        setSource(value);
    }

    const getDestinationName=(value)=>{
        setDestination(value);
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
         .post(`http://localhost:8080/trip`,{source,destination,date})
         .then(res=>{
            props.history.push({pathname:"/Trip", state:{data:res.data}})
            }).catch(err=>console.log(err));
        }
    }
    

    return (
        <div>
            <SearchDiv
            city = {city}
            setSourceName = {getSourceName}
            setDestinationName = {getDestinationName}
            getDepatureDate = {setDepatureDate}
            search = {search}
            flag={(source && destination && date)}
            />
        </div>
    )
}

export default withRouter(HomeView);