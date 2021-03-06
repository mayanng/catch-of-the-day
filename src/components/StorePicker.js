import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object,
  };

  goToStore = (event) => {
    //Stop form from submitting
    event.preventDefault();
    //get the text from that input
    const storeName = this.myInput.current.value;
    //change the page to the another one

    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit"> Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
