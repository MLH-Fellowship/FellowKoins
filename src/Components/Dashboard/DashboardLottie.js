import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./1.json";

class DashboardLottie extends Component {
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
        <Lottie options={defaultOptions} height={200} width={400} />
      </>
    );
  }
}

export default DashboardLottie;
