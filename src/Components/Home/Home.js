import React from "react";
import HomeLottie from "./HomeLottie";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-6 mt-5">
            <h1 className="text-center">
              <strong>FellowKoins</strong>
            </h1>
            <p className="mt-5 text-white">
              Want to do more with your open source contributions? Contribute
              issues, feature requests and PRs and earn FellowKoins and make
              your mark in the MLH Fellowship's FellowBoard. Redeem your points
              later and celebrate the triumph and glee of being an open source
              contributor at MLH Fellowship.
            </p>
          </div>
          <div className="col-sm-6 col-lg-6 mt-5">
            <HomeLottie />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
