import React from "react";
import "./FellowBoard.css";
import { getRanks } from "../../Api/api";

export default class FellowBoard extends React.Component {
  state = {
    team: [],
  };
  async componentDidMount() {
    console.clear();
    const data = await getRanks();
    this.setState({ team: data });
    console.log(this.state.team);
    const randomEmoji = () => {
      const emojis = ["👏", "👍", "🙌", "🤩", "🔥", "⭐️", "🏆", "💯"];
      let randomNumber = Math.floor(Math.random() * emojis.length);
      return emojis[randomNumber];
    };

    this.state.team.forEach(async (user, index) => {
      const list = document.getElementById("list");
      let newRow = document.createElement("li");
      const userData = await fetch(
        `https://api.github.com/users/${user.handle}`
      );
      const avatarUrl = await userData.json();

      newRow.classList = "c-list__item";
      newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${index + 1}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${avatarUrl["avatar_url"]}" />
				<div class="c-media__content">
					<a class="c-media__link u-text--small" href="https://github.com/${
            user.handle
          }" target="_blank">@${user.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
            <div class="u-mt--8">
                ${user.pr_count}
                <i class="fas fa-code-branch m-1"></i>
            </div>
            <div class="u-mt--8">
					${randomEmoji()}
				</div>
			</div>
		</div>
	`;
      if (index + 1 === 1) {
        newRow.querySelector(".c-place").classList.add("u-text--dark");
        newRow.querySelector(".c-place").classList.add("u-bg--yellow");
        newRow.querySelector(".c-kudos").classList.add("u-text--yellow");
      } else if (index + 1 === 2) {
        newRow.querySelector(".c-place").classList.add("u-text--dark");
        newRow.querySelector(".c-place").classList.add("u-bg--teal");
        newRow.querySelector(".c-kudos").classList.add("u-text--teal");
      } else if (index + 1 === 3) {
        newRow.querySelector(".c-place").classList.add("u-text--dark");
        newRow.querySelector(".c-place").classList.add("u-bg--orange");
        newRow.querySelector(".c-kudos").classList.add("u-text--orange");
      }
      list.appendChild(newRow);
    });
  }
  render() {
    return (
      <div className="fellowboard">
        <h1 className="text-center mt-5 mb-5">
          <strong style={{ fontFamily: "Poppins" }}>FellowBoard</strong>
        </h1>
        <div className="l-wrapper">
          <div className="l-grid">
            <div className="l-grid__item l-grid__item--sticky">
              <div className="c-card u-bg--light-gradient u-text--dark">
                <div className="c-card__body">
                  <div className="u-display--flex u-justify--space-between">
                    <div className="u-text--left">
                      <div className="u-text--small">All Fellows</div>
                      <h2>{this.state.team.length}</h2>
                    </div>
                    <div className="u-text--right"></div>
                  </div>
                </div>
              </div>
              <div className="c-card">
                <div className="c-card__body">
                  <div className="u-text--center" id="winner"></div>
                </div>
              </div>
            </div>
            <div className="l-grid__item">
              <div className="c-card">
                <div className="c-card__body">
                  <ul className="c-list" id="list">
                    <li className="c-list__item">
                      <div className="c-list__grid">
                        <div className="u-text--left u-text--small u-text--medium">
                          Rank
                        </div>
                        <div className="u-text--left u-text--small u-text--medium">
                          Fellow
                        </div>
                        {this.state.team.length === 0 ? (
                          <div className="u-text--left u-text--small u-text--medium">
                            Getting fellows...
                          </div>
                        ) : null}
                        {/* <div className="u-text--right u-text--small u-text--medium">
                          FellowKoins
                        </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
