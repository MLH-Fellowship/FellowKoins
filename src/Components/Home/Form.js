import React from "react";

function Form() {
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
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">
          Get FellowKoins
        </button>
      </form>
    </>
  );
}

export default Form;
