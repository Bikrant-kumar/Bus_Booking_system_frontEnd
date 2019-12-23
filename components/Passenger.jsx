import React from 'react';
import './card.css';

const Passenger =()=> {
    return (    <div class="form-style-3">
                <form>
                <fieldset><legend>Passenger Details</legend>
                <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
                <label for="field2"><span>Age <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
                <label for="field3"><span>Seat No. <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
                <label for="field4"><span>Gender</span><select name="field4" class="select-field">
                <option value="Appointment">Male</option>
                <option value="Interview">Female</option>
                </select>
                <input type="submit" value="Submit" />
                </label>
                </fieldset>
                </form>
                </div>
    )
}
export default Passenger;