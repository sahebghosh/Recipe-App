import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
  render() {
    const {
      recipe,
      handelDetailID,
      value,
      handelChange,
      handelSearch,
      error_message
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handelChange={handelChange}
          handelSearch={handelSearch}
        />
        <div className="container my-5">
          {/* Title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase md-3">
              <h1 className="text-show">recipe list</h1>
            </div>
          </div>
          {/* End of Title */}
          <div className="row">
            {error_message ? (
              <h1 className="text-danger text-center">{error_message}</h1>
            ) : (
              recipe.map(recipeItem => {
                return (
                  <Recipe
                    key={recipeItem.recipe_id}
                    item={recipeItem}
                    handelDetailID={handelDetailID}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeList;
