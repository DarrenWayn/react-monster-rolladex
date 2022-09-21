import { Component } from "react";
import Card from "../card/Card";
import "./CardList.css";

class CardList extends Component {
  render() {
    const { monsters, searchField } = this.props;
    return (
      <div className={searchField.length > 1 ? 'card-list' : 'on-search'}>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
