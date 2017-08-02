import React from "react";

export default class Home extends React.Component{
    render() {
        var text= "Lagari Thrust!"
        return(
            <div>
                <p>In a new component !</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => name : {this.props.user.name}</p>
            <div>
                <h2>Hobbies</h2>
                <ul>
                     {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
                </ul>
            </div>
                <hr/>
                {this.props.children}
            </div>

        );
    }
}
Home.propTypes = {
    name:React.PropTypes.string,
    age :React.PropTypes.number,
    user :React.PropTypes.object,
    children : React.PropTypes.element.isRequired
};