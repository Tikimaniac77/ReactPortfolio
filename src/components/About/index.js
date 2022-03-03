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
            business administration and 6+ years of experience working in the
            software industry. Pursuing an innovative team to leverage my newly
            developed skills in: Browser Based Technologies: • HTML/CSS •
            JavaScript/jQuery • Responsive Design • Bootstrap Handlebars • Local
            Storage, Session Storage, IndexedDB • React.js Databases: • MySQL •
            MongoDB Server-Side Development: • User Authentication • Progressive
            Web Applications (PWAs) • MERN Stack (MongoDB, Express.js, React.js,
            Node.js) API Interaction: • API • JSON • AJAX Considered to have an
            excellent analytical eye for solutions development on the
            administrative side, I’m now eager and excited to apply my new
            knowledge towards the development sector by leveraging my upcoming
            full stack development certificate. With any project, my goal is to
            provide the best possible end user satisfaction, be it an internal
            or external customer, the user experience is always the keystone.
            I’ve worked closely with a four person teams developing applications
            such Scrappi; a service to help people quickly parse though data and
            produce a short or long analysis using an open-source machine
            learning (AI) library from TensorFlow. First you can present one or
            multiple documents, determine the file type, and then, you will be
            presented with an analysis that you can either save to your profile
            or delete. I’m anxious and eager to continue applying my skills as
            part of an ever changing, quality-centric team, crafting the highest
            quality of user experience on the web
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
