import React,{useEffect,useState} from 'react';
import './card.css';
import TripCard from '../Molecule/TripCard/tripCard';

 const Trip=(props)=> {
    const [trips,setTrips]=useState(null);
    const tripdetails=props.tripdetails;
    const [sortType,setSortType]=useState(null);
    const [companyName,setCompanyName]=useState(null);

    useEffect(() => {
        setTrips(trips); 
        if(sortType){
            setTrips(trips);
            console.log(trips)
        }
    },[sortType])

    useEffect(() => {
        setTrips(trips); 
        if(companyName){
            let details=tripdetails.filter((ele)=>{
                if(ele.bus_details.bus_company.company_Name.toLowerCase().includes(companyName.toLowerCase())){
                    return true;
                }
                return false;
            })
            setTrips(details);     
        }
        else{
            setTrips(props.tripdetails); 
        }
    },[companyName])

    const sortBy =(evt)=>{
        // var bus=evt.bus_details.bus_company.company_Rating;
        if(evt.target.value==="Rating Asc"){
            trips.sort((a,b)=>(a.bus_details.bus_company.company_Rating - b.bus_details.bus_company.company_Rating));
        }
        else if(evt.target.value==="Rating Desc"){
            trips.sort((a,b)=>(b.bus_details.bus_company.company_Rating - a.bus_details.bus_company.company_Rating));
        }
        else if(evt.target.value==="Price Asc"){
            trips.sort((a,b)=>(a.cost - b.cost)); 
        }
        else if(evt.target.value==="Price Desc"){
            trips.sort((a,b)=>(b.cost - a.cost)); 
        }
        setSortType(evt.target.value);
    }

    const filterByCompanyName=(e)=>{
            setCompanyName(e.target.value);
    }

    return (<div>
                <div className="sort">
                    <input text="" onChange={filterByCompanyName} placeholder="Filter By CompanyName" /> 
                    <select onChange={sortBy}>
                      <option value="Rating desc">--Sort--</option>
                      <option value="Rating Asc">Rating Asc</option>
                      <option value="Rating Desc">Rating Desc</option>
                      <option value="Price Asc">Price Asc</option>
                      <option value="Price Desc">Price Desc</option>
                    </select>
                </div>
                <div className="heading"> <h2>{props.tripdetails[1].routes.destination1.destination_Name} ----> {props.tripdetails[1].routes.destination2.destination_Name}</h2>
                     <h2> Departure Date: {props.tripdetails[1].trip_Date}</h2>
                </div>
                <div style={{backgroundColor:"lightblue"}}>   {
                    (trips != null)?
                     trips.map((trip,index)=>
                    <div key={index}>
                    <TripCard trip={trip}/>
                    </div>
                    ):<div>No trips</div>
                 }        
                </div>  
          </div>
    )
}
export default Trip;