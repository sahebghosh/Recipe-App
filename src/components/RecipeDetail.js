import React, { Component } from "react";
import { recipeData } from "../tempDetails";

class RecipeDetail extends Component {
  state = {
    recipe: recipeData
  };

  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=3ac11c56ef4be0402c1caf0a47d0ac21&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsonDataFormat = await data.json();
      this.setState({
        recipe: jsonDataFormat.recipe
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    const { handelPageID } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handelPageID(1)}
              >
                Back to Recipe
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase"> {title} </h6>
              <h6 className="text-warning text-capitalize text-show">
                Provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                className="btn btn-primary mt-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                publisher webpage
              </a>
              <a
                href={source_url}
                className="btn btn-success mt-2 mx-3 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-show">
                      {" "}
                      {item}{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetail;
