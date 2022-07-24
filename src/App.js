import NavBar from "./components/NavBar";
import Bannner from "./components/Bannner";
import Movies from "./components/Movies";
import Pagination from"./components/Pagination"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Favourites from "./components/Favourites";

function App() {
  return (
    <BrowserRouter>

    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<>
      <Bannner/>
      <Movies/>
    {/* <Pagination/> */}
      </>}>
      </Route>
      <Route path='/favourites' element={<Favourites/>}  ></Route>
    </Routes>
{/*   
    <Movies></Movies> 
    <Pagination></Pagination> */}
    
    </BrowserRouter>
   
  );
}

export default App;
