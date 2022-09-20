
import './App.css';
import Blogsnewsevents from './components/Blogsnewsevents';
import Careers from './components/Careers';
import Concert from './components/Concert';
import Footer from './components/Footer';
import Global from './components/Global';
import Globalreach from './components/Globalreach';
import Herosection from './components/Herosection';
import Industries from './components/Industries';
import Navbar from './components/Navbar';
import Ourwork from './components/Ourwork';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Global/>
      <Services/>
       <Industries/>
      <Concert/>
      <Globalreach/>
      <Careers/>
     <Blogsnewsevents/>
     <Ourwork/>  
      <Footer/>
    </div>
  );
}

export default App;
