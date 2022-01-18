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
            Front-end web developer with a background in entrepreneurial
            business administration and 5+ years experience working in the
            software industry. Pursuing an innovative team to leverage my newly
            developed skills in JavaScript, CSS, React.js, and responsive web
            design. Considered to have an excellent analytical eye for solutions
            development on the administrative side, I’m now eager and excited to
            apply my new knowledge towards the development sector by leveraging
            my upcoming full stack development certificate. With any project, my
            goal is to provide the best possible end user satisfaction, be it an
            internal or external customer, the user experience is always the
            keystone. I’m currently working closely with a four person team
            developing an application that bridges and aggregates multiple API’s
            into one easily available and user friendly resource. It’s goal is
            to help singles locate potential partners by matching common
            interests and suggest date locations based on the entered
            information gathered. I’m anxious and eager to continue applying my
            skills as part of an ever changing, quality-centric team, crafting
            the highest quality of user experience on the web.
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
