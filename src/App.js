import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import  {Home,Comprar} from './Pages/Home';
import {Portal} from './Pages/Portal';
import Button from '@mui/material/Button';



export function Navbar() {
  return(
      <>
       
       <h1> Hola </h1>
      </>

  );
  
}





function App() {
  return (
    
    <div className="App">
    
   <h1> EcWallet </h1>

  <Info/>


  <Button href = "/portal" variant="contained">Comprar</Button>
<Routes>
  <Route path="/portal" element={<Portal/>}/>
</Routes>

    
    </div>
  );
}

const Info = ()=>(
  <>
  <div>
  <h1> Bitcoin </h1>

  </div>
  </>
)



export default App;
