import React, { Component } from "react";

class RecipeSearch extends Component {
  render() {
    const { value, handelChange, handelSearch } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 text-center mt-5">
              <h1 className="text-show text-capitalize">
                search for recipe{" "}
                <strong className="text-danger">Food2Fork</strong>{" "}
              </h1>
              <form className="mt-4" onSubmit={handelSearch}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken,onions,carrots"
                    className="form-control"
                    value={value}
                    onChange={handelChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search" />{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeSearch;
