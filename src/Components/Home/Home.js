import React from "react";
import HomeLottie from "./HomeLottie";
import HomeLottie2 from "./HomeLottie2";
import Form from "./Form";

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
        <Form />
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-sm-6 col-lg-6 mt-5">
            <HomeLottie2 />
          </div>
          <div className="col-sm-6 col-lg-6 mt-5">
            <h3 className="text-center mt-5">
              <strong>How to Earn FellowKoins ?</strong>
            </h3>
            <p className="text-white mt-3">
              Earn FellowKoins by contributing to any valid{" "}
              <a href="https://github.com/MLH-Fellowship/">MLH Fellowship</a>{" "}
              GitHub Project Repo
            </p>
            <ul className="mt-3 text-white">
              <li>
                <span>💰</span> Earn <strong>+10</strong> FellowKoins when you
                make a PR
              </li>
              <li>
                <span>💰</span> Earn <strong>+20</strong> FellowKoins when your
                PR gets merged
              </li>
              <li>
                <span>💰</span> Earn <strong>+30</strong> FellowKoins when you
                make an issue
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
