import React from 'react';
import Stt from './Stt';

class Att extends React.Component{
    constructor(props){
        super(props);
        console.log('in cons of Att')

        this.state = {loading:true,visible:true,count:0}
    }

    componentDidMount(){

        console.log('in cdm of Att')
     }
       

    render(){
return (<div>

     
    <button onClick = {()=> {this.setState({loading:!this.state.loading,count:this.state.count+1})}}>inc</button>
    <button onClick = {()=> {this.setState({visible:!this.state.visible})}}>remove/add</button>

    {this.state.visible && <Stt />}
</div>)
    }
}

export default Att;