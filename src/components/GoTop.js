import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowDropUp";

class GoTop extends Component {
  state = {
    thePosition: false,
  };

  scrollUpfun() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
  }

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <Fab onClick={this.scrollUpfun} className="go-up">
            <ArrowBack />
          </Fab>
        </>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;
