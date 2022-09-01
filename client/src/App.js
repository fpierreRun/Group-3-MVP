import EventCalendar from './components/EventCalendar';
import Header from './components/Header';

import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';


function App() {
  return (
    <>
      <Header></Header>
      <main className='container-fluid'>
        <EventCalendar></EventCalendar>
      </main>
    </>
  );
}

export default App;
