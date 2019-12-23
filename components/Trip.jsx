import React,{useEffect,useState} from 'react';
import './card.css';
import TripCard from './tripCard';
import Header from './layout/Header';


 const Trip=(props)=> {
    const [trips,setTrips]=useState(null);
    const tripdetails=props.location.state.data;
    const [sortType,setSortType]=useState(null);
    const [companyName,setCompanyName]=useState(null);
    useEffect(() => {
        console.log(props.location.state.data);
        setTrips(tripdetails); 
    },[])

    useEffect(() => {
        if(sortType){
            setTrips(trips);
            console.log(trips)
        }


    },[sortType])

    useEffect(() => {
        if(companyName){
            let details=tripdetails.filter((ele)=>{
                if(ele.bus_details.bus_company.company_Name.toLowerCase().includes(companyName.toLowerCase())){
                    return ele;
                }
            })
            setTrips(details);
        }
        else{
            setTrips(props.location.state.data); 
        }
    },[companyName])

    const sortBy =(evt)=>{
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
                <Header/>
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
                 <div className="heading"> <h2>{props.location.state.data[1].routes.destination1.destination_Name} ----> {props.location.state.data[1].routes.destination2.destination_Name}</h2>
                     <h2> Departure Date {props.location.state.data[1].trip_Date}</h2>
                 </div>
                 <div style={{backgroundColor:"lightblue"}}>   {
                    (trips != null)?
                     trips.map((trip,index)=>
                    <div key={index}>
                    {/* {console.log(trip.bus_details.bus_rating)} */}
                    <TripCard trip={trip}/>
                    </div>
                    ):<div>No trips</div>
                 }        
                 </div>  
          </div>
    )
}
export default Trip;