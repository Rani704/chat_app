import Header from './components/header/header';
import './App.css';
import Footer from './components/footer/footer';
import Body from './components/chatBody/body';
function App() {
  return (
    <div className="main">
     <div className='body'>
       <Header/>
       <Body/>
       <Footer/>
       </div>
    </div>
  );
}

export default App;
