import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';


import DieuHuong from './router/dieuhuong';
function App() {
  return (
    <div className="App" >
      <Header/>
      
         <DieuHuong/>
      <Footer/>
    </div>
  );
}

export default App;
