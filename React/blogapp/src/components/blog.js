import react,{Component} from 'react';
import {useNavigate} from "react-router-dom";

import './blog.css';




const url="http://localhost:9090/getblog"



class Blog extends Component{
    constructor(){
        super()
        this.state={
            data:""
        }
    }

    

     delete=(e)=>{
      //  var navigate=useNavigate();
   
        var id=e.target.value
        console.log(`http://localhost:9090/deleteblog/`+id)
         fetch(`http://localhost:9090/deleteblog/`+id,{method:'DELETE'})
        // .then(()=>{
        //     navigate.push('/getblog')
        // })
        
    }

    renderBlog=(data)=>{
        if(data){
            return data.map((x)=>{
                return(
                    <div className='row'> 
                        <div className='col-md-1'>                            
                        </div>
                        <div className='col-md-6' >                       
                            <div className='card'>
                                <div className='card-header'>
                                    {x.heading}
                                </div>
                                <div className='card-body'>
                                    {x.desc}
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-danger' value={x._id} onClick={this.delete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )
            })
        }

    }

    render(){
        return(
            <div>
                {this.renderBlog(this.state.data)}
            </div>
        )

    }
       

 componentDidMount()
 {
    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then((dat)=>this.setState({data:dat}))

 }
    
}


export default Blog;
