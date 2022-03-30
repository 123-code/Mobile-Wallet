import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import  {Home,Comprar} from './Pages/Home';
import {Portal} from './Pages/Portal';
import Button from '@mui/material/Button';






function App() {
  return (
     
    <div className="App">
    
   <h1> EcWallet </h1>

  


  <Button href = "/portal" variant="contained">Comprar</Button>
<Routes> 
  <Route path="/portal" element={<Portal/>}/>
</Routes>

    
    </div>
  );
}




export default App;
