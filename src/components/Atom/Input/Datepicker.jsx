import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {

  var dateFormat = require('dateformat')
    var today = new Date();
    today = dateFormat(today, "isoDateTime"	)
  const [selectedDate, setSelectedDate] = React.useState(new Date(today));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.getDate(date);
    
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date "
          format="yyyy-MM-dd"
          // minDate={today}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />       
      </Grid>
    </MuiPickersUtilsProvider>
    );
    }