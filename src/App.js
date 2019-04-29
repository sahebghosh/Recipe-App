import React, { Component } from "react";
import "./App.css";
import { recipeData } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

class App extends Component {
  state = {
    recipes: recipeData,
    url:
      "https://www.food2fork.com/api/search?key=3ac11c56ef4be0402c1caf0a47d0ac21",
    baseURL:
      "https://www.food2fork.com/api/search?key=3ac11c56ef4be0402c1caf0a47d0ac21",
    detail_ID: 35380,
    pageID: 1,
    search: "",
    query: "&q=",
    error_message: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonDataFormat = await data.json();
      if (jsonDataFormat.recipes.length === 0) {
        this.setState(() => {
          return {
            error_message:
              "Sorry, your search did not return any recipes...please type valid ingredients name ):"
          };
        });
      } else {
        this.setState(() => {
          return {
            recipes: jsonDataFormat.recipes
          };
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  pageDisplay = index => {
    switch (index) {
      case 1:
        return (
          <RecipeList
            recipe={this.state.recipes}
            handelDetailID={this.handelDetailID}
            value={this.state.search}
            handelChange={this.handelChange}
            handelSearch={this.handelSearch}
            error_message={this.state.error_message}
          />
        );
      case 2:
        return (
          <RecipeDetail
            id={this.state.detail_ID}
            handelPageID={this.handelPageID}
          />
        );
      default:
    }
  };

  handelPageID = index => {
    this.setState({
      pageID: index
    });
  };

  handelDetailID = (index, id) => {
    this.setState({
      pageID: index,
      detail_ID: id
    });
  };

  handelChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handelSearch = e => {
    e.preventDefault();
    const { baseURL, search, query } = this.state;
    this.setState(
      () => {
        return {
          url: `${baseURL}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    return (
      <React.Fragment>{this.pageDisplay(this.state.pageID)}</React.Fragment>
    );
  }
}

export default App;
