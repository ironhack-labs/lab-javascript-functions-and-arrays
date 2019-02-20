import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import foods from "./foods.json";

class App extends Component {
  render() {
    return (
      <div className="container">
        <FoodContainer foods={foods} />
      </div>
    );
  }
}

class FoodBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.props.food.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

class FoodBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: null,
      image: "",
      visible: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(event) {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleSubmit(event) {
    // stop form submission
    event.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={this.state.visible ? "" : "is-invisible"}>
          {/* name */}
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                class="input"
                type="text"
                name="name"
                placeholder="Name of food"
              />
            </div>
          </div>
          {/* calories */}
          <div class="field">
            <label class="label">Calories</label>
            <div class="control">
              <input
                value={this.state.calories}
                onChange={e => this.handleChange(e)}
                class="input"
                type="number"
                name="calories"
                placeholder="Amount of calories (cal)"
              />
            </div>
          </div>
          {/* image */}
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input
                value={this.state.image}
                onChange={e => this.handleChange(e)}
                class="input"
                type="text"
                name="image"
                placeholder="Image URL"
              />
            </div>
          </div>
        </div>

        <div class="control">
          <button class="button is-primary">Add food</button>
        </div>
      </form>
    );
  }
}

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.onSearch({
      search: event.target.value
      // search: this.state.search
    });
  }

  render() {
    return (
      <div class="field has-addons">
        <div class="control">
          <input
            value={this.state.search}
            onChange={e => this.handleChange(e)}
            class="input"
            name="search"
            type="text"
            placeholder="Search for food"
          />
        </div>
      </div>
    );
  }
}

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: this.props.foods
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAdd(food) {
    this.setState({
      foods: [...this.state.foods, food]
    });
  }

  handleSearch(search) {
    console.log("TCL: FoodContainer -> handleSearch -> search", search);
    let foodsCopy = [...this.state.foods];
    this.setState({
      foods: foodsCopy.filter(food => food.name.toLowerCase().includes(search.search))
    });
  }

  render() {
    return (
      <div>
        {console.log("TCL: FoodContainer -> render -> this.state.foods", this.state.foods)}
        <FoodBoxForm onAdd={this.handleAdd} />
        <FoodSearch onSearch={this.handleSearch} />
        {this.state.foods.map(food => (
          <FoodBox food={food} />
        ))}
      </div>
    );
  }
}

export default App;