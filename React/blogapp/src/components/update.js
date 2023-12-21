import { Component } from 'react';
import './update.css'


const closeUpdate=()=>{
    var y=document.getElementById('updateOpen');
    y.style.display="none"
}


class update extends Component
{

    constructor(){
        super()
        this.state={
            topicc:" ",
            descc:" "
        }

    }
    descHandle=(e)=>{
        this.setState({descc:e.target.value})

    }

    topicHandle=(e)=>{
        this.setState({topicc:e.target.value})

    }

    submitUpdate=()=>{
        const desc=this.state.descc;
        const topic=this.state.topicc;
        const updata={topic,desc}
       fetch(`https://blogap1-46c3501b7198.herokuapp.com/update/${this.props._id}`,{
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updata)

    })
        console.log(this.props.id)

    }

    sample=()=>{
        console.log(this.props.heading)
    }
    
    render(){
        return(
            <div id="updateOpen" className='update' style={{display:"none"}}>
                <form>
                    
                    <label>Topic</label>
                   <input type="text" id="topicText" value={this.props.heading}  onChange={this.topicHandle}></input>
                   
                    <label>Desc</label>
                   <input type="text" value={this.props.desc} onChange={this.descHandle} ></input>
    
                </form>
                <button className='btn btn-danger' onClick={closeUpdate}>Close</button>
                <button className='btn btn-success' onClick={this.submitUpdate}>Submit</button>
    
            </div>
        )

    }
    
    
}

export default update