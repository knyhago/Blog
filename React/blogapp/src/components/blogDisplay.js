import react,{Component} from 'react';
import { useNavigate } from 'react-router-dom';
import Update from './update';


    
const Delee=(e)=>{
   

    var id=e.target.value
    console.log(`https://blogap1-46c3501b7198.herokuapp.com/deleteblog/`+id)
     fetch(`https://blogap1-46c3501b7198.herokuapp.com/deleteblog/`+id,{method:'DELETE'})
        alert("deleteed")
        window.location.reload();
    
}

const update=(env)=>{
    var id=env.target.value;
    fetch(`https://blogap1-46c3501b7198.herokuapp.com/update/${id}`,{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify()
    }
    )
}

const openUpdate=(e)=>{
    var x=document.getElementById('updateOpen')
    x.style.display="block"

}



const Blogdisplay=(props)=>{
    
    const Diplay=({blogdata})=>
    {    
       
    if(blogdata){     
        
        return blogdata.map((x)=>{
            return(
                
                    <div className='column' >  
                    <Update heading={x.heading} desc={x.desc} id={x._id}/>    
                        <div className='card'id={x._id}>
                            <div className='card-header'>
                                {x.heading}
                            </div>
                            <div className='card-body'>
                                {x.desc}                             
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger' value={x._id} onClick={Delee}>Delete</button>
                                <button className='btn btn-warning'value={x._id} onClick={openUpdate} disabled >Update</button>
                            </div>
                        </div>
                    </div>               
            )
        })
    }
}

return(

        <div className='row'>     
        
        <div style={{display:'block'}}>
            {Diplay(props)}
        </div>   
        </div>
)
}

export default Blogdisplay
