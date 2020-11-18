import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./2.json";

class HomeLottie2 extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <>
        <Lottie options={defaultOptions} height={300} width={400} />
      </>
    );
  }
}

export default HomeLottie2;
