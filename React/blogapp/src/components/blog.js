import react,{Component} from 'react';
import {useNavigate} from "react-router-dom";
import Blogrender from './blogRender';
import Sidebar from './sideList';
import Nav from './nav';

import './blog.css';

const Blog=()=>{
    return(
        <div className='container-fluid p-3 my-3 border'>
        <Sidebar/>
        <Nav/>   
        
         <Blogrender/>
        </div>
        
    )
}




    

    



export default Blog;
