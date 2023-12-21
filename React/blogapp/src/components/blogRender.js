import react,{Component} from 'react';
import {useNavigate} from "react-router-dom";
import Blogdisplay from './blogDisplay';




const url="https://blogap1-46c3501b7198.herokuapp.com/getblog"



class Blogrender extends Component{
    constructor(){
        super()
        this.state={
            data:""
        }
    }
render(){
    return(
    <div>
        <Blogdisplay blogdata={this.state.data}/>
        


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

export default Blogrender