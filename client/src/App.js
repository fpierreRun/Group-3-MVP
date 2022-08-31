import logo from './logo.svg';
import './style.css';
import EventCalendar from './components/EventCalendar';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <main className='container-fluid'>
      <EventCalendar></EventCalendar>
    </main>
    
  );
}

export default App;
