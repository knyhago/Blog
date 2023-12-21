import react from 'react';
import { Link } from 'react-router-dom';
import './sideList.css'
const Sidebar=()=>{
    return(
        <div>
            <div>
            <button class="openbtn" onClick={open}>&#9776; Open Sidebar</button>
            </div>
            <div className='sidebar' id='sidelist'>
                <a class="close" onClick={close}>&times;</a>
                <Link to="/home">Home</Link>
                <Link to="/addBlog">Add Blog</Link>
            </div>
        </div>
    )
}

const open=()=>{
    console.log('opened')
    document.getElementById('sidelist').style.width="250px"
    document.getElementById('roe').style.marginLeft="250px"
}

const close=()=>{
    console.log("closed")
    document.getElementById('sidelist').style.width="0px"
    document.getElementById('roe').style.marginLeft="0px"
}

export default Sidebar