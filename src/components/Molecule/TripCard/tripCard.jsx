import React from 'react';
import Footer from '../../Atom/layout/Footer';
import './card.css';

const tripCard=(props)=>{

    return(<div>
        <div className="card">
            <div className='main'> 
                <p><b>{props.trip.bus_details.bus_company.company_Name}</b></p>
                <p>Rating - <b>{props.trip.bus_details.bus_company.company_Rating} </b></p>
                <p>AC/Non Ac - <b>{props.trip.bus_details.bus_type}</b></p>
                <p>Available Seat -<b> {props.trip.availableSeat}</b></p>
                <p>Bus no.- <b>{props.trip.bus_details.bus_name} </b></p>
                <p>Distance - <b>{props.trip.routes.route_distance}</b></p>
                <p>MRP - <b>{props.trip.cost} </b></p>
                <p ><button type="button"> Book </button></p>
                <div>
                <Footer/></div>
            </div>
        </div>
        </div>
    )

}
export default tripCard;
