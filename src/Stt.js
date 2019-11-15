import React from 'react';

class Stt extends React.Component{
    constructor(props){
        super(props);
        console.log('in cons of stt')
        this.state = {count:20}
    }

    componentDidMount(){

        console.log('in cdm')
     }

     componentWillReceiveProps(nextProps){
         //console.log(nextProps)
       //  this.setState({count:this.state.count+1})
         
     }
       
      componentWillUpdate(nextProps,nextState){
        console.log(nextProps)
        console.log(nextState)

      }
    render(){
    return (<div>stt {this.state.count}</div>)
    }
}

export default Stt;