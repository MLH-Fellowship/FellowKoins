import React from "react";
import DashboardLottie from "./DashboardLottie";
import { getStats, getActivity } from "../../Api/api";

export default class Dashboard extends React.Component {
  state = {
    stats: "",
    activity: [],
  };

  async componentDidMount() {
    // console.log(this.props.location.state.user_name);
    const statsData = await getStats(
      this.props.location.state.user_name.toString(),
      this.props.location.state.project.toString()
    );
    const activityData = await getActivity(
      this.props.location.state.user_name.toString(),
      this.props.location.state.project.toString()
    );
    this.setState({ stats: statsData, activity: activityData });

    this.state.activity.forEach(async (act, index) => {
      const list = document.getElementsByClassName(
        "list-group list-group-flush"
      )[0];
      let newRow = document.createElement("li");
      newRow.classList = "list-group-item";
      newRow.innerHTML = `<img src="https://img.icons8.com/fluent-systems-filled/24/000000/pull-request.png"/><a href="${act.pr_url}" target="_blank">${act.pr_title}</a>`;
      list.appendChild(newRow);
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center mt-5 mb-5">
          <strong style={{ fontFamily: "Poppins" }}>
            Hi, {`${this.props.location.state.user_name}`}
          </strong>
        </h1>
        <div className="row mb-3 m-0 dashboard">
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse">
              <div className="card-block text-center">
                <h6
                  className="text-uppercase font-weight-bold "
                  style={{ fontFamily: "Poppins" }}
                >
                  FellowKoins
                </h6>
                <h1 className="display-1 font-weight-bold">
                  {this.state.stats.fcoins}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse">
              <div className="card-block text-center">
                <h6
                  className="text-uppercase font-weight-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Pull Requests Made
                </h6>
                <h1 className="display-1 font-weight-bold">
                  {this.state.stats.pull_requests}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse">
              <div className="card-block text-center">
                <h6
                  className="text-uppercase font-weight-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Pull Requests Merged
                </h6>
                <h1 className="display-1 font-weight-bold">6</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse">
              <div className="card-block text-center ">
                <h6
                  className="text-uppercase font-weight-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Issues Raised
                </h6>
                <h1 className="display-1 font-weight-bold">3</h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center mt-5 mb-5">
          <strong style={{ fontFamily: "Poppins" }}>
            Your recent Activity
          </strong>
        </h1>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-6">
              <div className="card">
                {this.state.activity.length === 0 ? (
                  <h6
                    style={{
                      fontFamily: "Poppins",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Fetching your contributions...{" "}
                  </h6>
                ) : (
                  <ul className="list-group list-group-flush"></ul>
                )}
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
}
