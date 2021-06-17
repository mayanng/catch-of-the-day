import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  static propTyepes ={
      match: PropTypes.object

  };
  componentDidMount() {
    const { params } = this.props.match;
    //first reinstance our localStorage
    const localStorageRef = localStorage.getItem(params.storedId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storedId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storedId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // two steps for setting up the state
    // 1. Take the copy of the existing state
    const fishes = { ...this.state.fishes }; // way of taking copy
    // 2. Add new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };

  updateFish = (key, updatedFish) => {
    //1. Take a copy of the current state

    const fishes = { ...this.state.fishes };
    //2.Update that state
    fishes[key] = updatedFish;
    //3 Set that to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    //take a copy of state
    const fishes = { ...this.state.fishes };
    //update the state
    fishes[key] = null;
    //update state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };
    //either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // call setState to update our state object
    this.setState({ order });
  };
  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storedId={this.props.match.params.storedId}
        />
      </div>
    );
  }
}
export default App;
