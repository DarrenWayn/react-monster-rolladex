import { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { handleChange, placeholder, className } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
