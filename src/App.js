import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add, addasync} from './index.redux'
import axios from 'axios'
class App extends Component {
    constructor () {
        super()
        this.state = {
            data: {}
        }
    }
    componentDidMount () {
        axios.get('/data').then(res => this.setState({
            data: res.data
        }))
    }
    render() {
        const num = this.props.num
        const add = this.props.add
        const addasync = this.props.addasync
        return (
            <div className="App">
                {num}
                <button onClick={() => add()}></button>
                <button onClick={() => addasync()}>late</button>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        num: state
    }
}
const actionCreators = { add, addasync }
App = connect(mapStatetoProps, actionCreators)(App)
export default App;