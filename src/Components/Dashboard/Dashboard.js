import React from "react";
import DashboardLottie from "./DashboardLottie";

function Dashboard() {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">
        <strong>Dashboard</strong>
      </h1>
      <div className="row mb-3 m-0 dashboard">
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse">
            <div className="card-block text-center">
              <h6 className="text-uppercase font-weight-bold ">FellowKoins</h6>
              <h1 className="display-1 font-weight-bold">500</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse">
            <div className="card-block text-center">
              <h6 className="text-uppercase font-weight-bold">
                Pull Requests Made
              </h6>
              <h1 className="display-1 font-weight-bold">10</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse">
            <div className="card-block text-center">
              <h6 className="text-uppercase font-weight-bold">
                Pull Requests Merged
              </h6>
              <h1 className="display-1 font-weight-bold">6</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse">
            <div className="card-block text-center ">
              <h6 className="text-uppercase font-weight-bold">Issues Raised</h6>
              <h1 className="display-1 font-weight-bold">3</h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5 mb-5">
        <strong>Recent Activity</strong>
      </h1>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <DashboardLottie />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
