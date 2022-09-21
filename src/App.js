import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
            // test
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    const filteredMonster = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );

    const handleChange = (e) => {
      const searchField = e.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField };
      });
    };

    return (
      <div className="App">
        <input
          clasName="search-box"
          type="search"
          placeholder="search monster"
          onChange={handleChange}
        />
        {filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}

        {/* <button onClick={} */}
      </div>
    );
  }
}

export default App;
