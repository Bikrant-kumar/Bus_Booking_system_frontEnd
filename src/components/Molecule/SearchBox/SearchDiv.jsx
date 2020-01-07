import React from 'react';
import Datepicker from '../../Atom/Input/Datepicker';
import Searchindex from '../../Atom/Input/InputIndex';
import SearchButton from '../../Atom/Button/SearchButton';
import './SearchDiv.css';
import {withRouter} from "react-router-dom";

const SearchDiv=(props)=> {

    console.log(props.getSourceName,props.getDestinationName,props.getDepatureDate)
    const setSourceName = (value)=>{
        props.setSourceName(value);
    }

    const setDestinationName=(value)=>{
        props.setDestinationName(value);
    }


    return (
        <div className="SearchBox">
            <br/>
                    <Searchindex getSource={setSourceName} name="Source" cityDetails={props.city}/>
          <br/>
                    <Searchindex getSource={setDestinationName} name="Destination" cityDetails={props.city}/>
          <br/>
                    <Datepicker getDate={(date)=>{props.getDepatureDate(date)}} name="Select Date"/>
          <br/>
                    {(props.flag) ?
                    <center><SearchButton searchbutton={props.search} disable={false}/></center>
                    :<center><SearchButton searchbutton={props.search} disable={true}/>
                    </center>}
        </div>
    )
}

export default withRouter(SearchDiv);
