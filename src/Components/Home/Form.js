import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [userName, setUserName] = useState("");
  const [project, setProject] = useState("");
  const handleUserName = (e) => {
    if (e.target.value !== "") {
      setUserName(e.target.value);
    }
  };
  const handleProject = (e) => {
    if (e.target.value !== "") {
      setProject(e.target.value);
    }
  };
  return (
    <>
      <form method="post" style={{ marginTop: "80px" }}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationTooltipUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="validationTooltipUsernamePrepend"
                >
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                placeholder="GitHub Username"
                aria-describedby="validationTooltipUsernamePrepend"
                onChange={handleUserName}
                required
              />
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationTooltip01">Project Repo Name</label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              placeholder="Project Repo Name"
              onChange={handleProject}
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
        </div>
        <Link
          to={{
            pathname: "/dashboard",
            state: { user_name: userName, project: project },
          }}
        >
          <button class="btn btn-primary" type="submit">
            Get FellowKoins
          </button>
        </Link>
      </form>
    </>
  );
}

export default Form;
