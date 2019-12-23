/* eslint-disable no-use-before-define */
import React ,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
   
  function handleInputChange(event, value) {
    var new_data=[]
    props.getSource(value);
    console.log(value);
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.cityDetails}
      getOptionLabel={option => option.destination_Name}
      style={{ width:'100%' }}
      onChange={handleInputChange}
      renderInput={params => (
        <TextField {...params} label={props.name} variant="outlined" fullWidth />
      )}
    />
  );
}