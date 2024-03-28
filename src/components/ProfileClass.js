import React from 'react';

class Profile extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            value1:0, 
            value2:0
        }
        console.log("Console.log from Profile class constructor")
    }

 increment=()=>{
        this.setState({
            value1:this.state.value1+1,
            value2:this.state.value2+2
        });
    }

    componentDidMount(){
        console.log("Console.log from Profile class componentDidMount 😎")
    }

    render(){
        return (<>
        {console.log("Console.log from Profile class render")}
        <h1> Profile Class Component </h1>
        <h2>Props = {JSON.stringify(this.props)}</h2>
        <h2>Value1 = {this.state.value1}</h2>
        <h2>Value2 = {this.state.value2}</h2>
        <button onClick={this.increment}> Increase value 1 by 1 and value 2 by 2</button>
        </>);
    }

}



export default Profile;