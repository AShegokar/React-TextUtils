import React from "react";

export default function ContactUs(props) {

let contactcard = {
    color: props.mode === 'dark' ? '#a4c76f' : '#e1ce28', 
    background: props.mode === 'dark' ? '#1e4f77' : '#b36270',
}

  return (
    <div>
      <p>
        <a
          className="btn btn-primary mx-2"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Contact by phone
        </a>
        <button
          className="btn btn-primary mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Contact by email
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body" style={contactcard}>
              To reach out to us via phone please call on (428)-XXX-XXX
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body" style={contactcard}>
                To reach out to us via email please contact on sampleapp@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
