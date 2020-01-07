import React from 'react';

 const TripTemplate=(props)=> {
    return (
        <div>
            <div>
               { props.header }
            </div>
            <div>
                {props.tripView}
            </div>
        </div>
    )
}
export default TripTemplate;