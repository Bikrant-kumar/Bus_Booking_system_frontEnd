import React  from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
   
  function handleInputChange(event, value) {
      props.getSource(value);
    
  }
  const citynames=props.cityDetails.map((ele)=>{
    return ele.destination_Name;
  })

  return (
    <Autocomplete 
      id="combo-box-demo"
      options={citynames}
      getOptionLabel={option => option}
      style={{ width:'80%',marginLeft:'10%' }}
      onChange={handleInputChange}
      renderInput={params => (
        <TextField {...params} label={props.name} variant="outlined" fullWidth />
      )}
    />
  );
}