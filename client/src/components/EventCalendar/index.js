import React, { useState } from 'react';
import Calendar from 'react-calendar';


function EventCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);

    console.log(nextValue.toLocaleDateString('en-us', {day: 'numeric', month: 'numeric', year: 'numeric' }));

  }

  return (
      <div className='row justify-content-around'>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType={'US'}
          view={'month'}
          className='col-6'
        />
      </div>
  );
}

export default EventCalendar