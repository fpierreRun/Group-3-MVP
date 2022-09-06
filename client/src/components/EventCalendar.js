import React, { useState } from 'react';
import Calendar from 'react-calendar';


function EventCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);

    console.log(nextValue);

  }

  return (
      <div className='row justify-content-around m-4'>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType={'US'}
          view={'month'}
          className='col-4'
        />
      </div>
  );
}

export default EventCalendar