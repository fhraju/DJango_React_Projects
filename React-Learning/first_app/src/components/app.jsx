import React from "react";

import Profile from './profile/profile_index'
import Bio from "./profile/bio";
import Skills from "./profile/skills";


class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {count: 0}
    // }

    state = {
        count: 0
    }

    render() {
        return (
            <div className="App"> 
                <h1>Why do we need State</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1});
                    console.log('Clicked.....',this.state.count);
                    }}>
                    Increament +1
                </button>

                <Profile />

                <Bio name="Test User" title="Test Title"/>
                <Skills skillA='Test skillA' skillB='Test skillB' skillC="Test SkillC" />

            {/* <div style={{ marginTop:'30px', marginBottom:'30px'}}>
                <h3 style={{ marginBottom: '20px'}}>List of Programmers: </h3>
             <p>Mr. X</p>
                <Skills skillA='React' skillB='Express' skillC="Node Js" />
                <p>Mr. Y</p>
                <Skills skillA='React' skillB='JavaScript' skillC="React Native" />
             </div> */}
            </div>
        );
    }
}

export default App

/*function myFunctionalComponent() {
    return <h1>This is a Functional Component</h1>;
}
*/
//Arrow function
//const AnotherFunctionalComponent = () => (<p1>This is another Functional Component</p1>)
