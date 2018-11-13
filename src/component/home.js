import React from 'react'
import { Route, NavLink } from "react-router-dom";

let SS = () => {
    return (<p>112312313</p>)
}

let DD = () => {
    return (<p>DFFGB</p>)
}



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <h1>home</h1>
                <NavLink to="/home/s">导航1</NavLink>
                <NavLink to="/home/d">导航2</NavLink>
                <div className="main">
                    <Route path="/home/s" component={SS} exact />
                    <Route path="/home/d" component={DD} exact />
                </div>



            </div>
        )
    }
}
export default Home