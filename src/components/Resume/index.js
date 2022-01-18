import React from "react";

function Resume() {
  return (
    <section class="mb-5">
      <h1 className="resume">resume: Michael Wachtel</h1>
      <hr></hr>
      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          Business executive and full stack developer with experience the MERN
          and MEAN stacks. Experienced in commercial website and software
          development.
          <p class="mt-5">
            <a href="https://www.linkedin.com/in/michael-wachtel-86b099b1/">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin-2.png"
                alt="Michael Wachtel LinkedIn"
              />
            </a>
          </p>
          <p>
            Download my full{" "}
            <a
              href="https://github.com/Tikimaniac77/ReactPortfolio/raw/main/src/assets/Michael%20Wachtel%20-%20Brand%20and%20Resume/resume.docx.pdf"
              class="link"
            >
              resume
            </a>
            <br></br>
          </p>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div id="front-back">
          <h2>front end experience</h2>
          <p>
            HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Angular.js,
            IndexedDB
          </p>
        </div>

        <div id="front-back" class="mt-5">
          <h2>back end experience</h2>
          <p>
            Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize,
            NoSQL (MongoDB, Mongoose), API's (third-party, RESTful,
            server-side), Templating (Handlebars)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
