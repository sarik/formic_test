import React from 'react';
import Hello from './Hello';
import Nello from './App_old_sl';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            loading: true
        }
    }

    render() {
        return <div>
            <Hello/>
            <Nello/>
            <button onClick={() => { this.setState({ loading: !this.state.loading 
        }) }}>Check</button></div>
    }
}

export default App;