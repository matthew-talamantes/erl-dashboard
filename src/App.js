import './App.css';

import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <Header />
      <Calendar displayDate={new Date()} />
    </>
  );
}

export default App;
