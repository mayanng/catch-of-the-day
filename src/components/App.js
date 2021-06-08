import React from "react";
 import Header from './Header'; 
 import Order from './Order';
 import Inventory from "./Inventory";
 import sampleFishes from "../sample-fishes";
 import Fish from "./Fish";
class App extends React.Component{
    state={
        fishes: {},
        order: {}
    };
    addFish=fish=>{
        // two steps for setting up the state
        // 1. Take the copy of the existing state
        const fishes = {...this.state.fishes};   // way of taking copy 
        // 2. Add new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };
    loadSampleFishes =() => {
        this.setState({fishes: sampleFishes});
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"  />
                    <ul className="fishes">
                    <Fish />
                    <Fish />
                    <Fish />
                    <Fish /> 
                    <Fish /> 
                    <Fish /> 
                    <Fish /> 
                    <Fish /> 
                    <Fish /> 
                    
                                      </ul>


                </div>
                <Order />
                <Inventory addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                />
                

            </div> 
        );
         
    }
}
export default App;
