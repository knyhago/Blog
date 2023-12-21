import react from 'react';
import { Route,BrowserRouter,Routes,Switch } from 'react-router-dom';
import Addblog from './addblog';
import Blog from './blog';
import Sidebar from './sideList';



const Routing=()=>{
    return(
        <div>
            
            <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Blog/>}/><Route/>
            <Route path="/home" element={<Blog/>}/><Route/>
            <Route path="/addblog" element={<Addblog/>}/>
            </Routes>
           

            </BrowserRouter>
        </div>
    )

}

export default Routing