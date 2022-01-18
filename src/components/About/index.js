import React from "react";

function About() {
  return (
    <section className="title">
      <h1 class="name">about: Michael Wachtel</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            class="mb-5"
            src="https://raw.githubusercontent.com/Tikimaniac77/ReactPortfolio/main/src/assets/images/headshot.png"
            alt="Michael Wachtel"
          />
          <p>
            Home grown in the Inland Empire. I'm a father, husband, and friend
            to all who know me. I believe in working hard, but I also believe in
            working smart. Things don't always need to be a struggle.
          </p>
          <p>
            View full{" "}
            <a href="#/resume" class="link">
              resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
