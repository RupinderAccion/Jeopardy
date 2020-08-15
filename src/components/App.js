import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCategories } from "../actions";
class App extends Component {

  componentDidMount() {
    if (this.props.categories.length === 0) {
      fetch("http://jservice.io/api/categories?count=20")
        .then((res) => res.json())
        .then((json) => this.props.setCategories(json));
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Jeopardy!</h2>
        {this.props.categories.map(category => {
            return(
            <div key={category.id}>
            <Link to={"/category"}><h4>{category.title}</h4></Link>
            </div>
            )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

export default connect(mapStateToProps, { setCategories })(App);