import React from "react";

function Footer() {
  return (
    <div class="footer" id="footer">
      <a href="https://github.com/Tikimaniac77">
        <img
          src="https://img.icons8.com/color/48/000000/github-2.png"
          alt="Github"
          class="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/michael-wachtel-86b099b1/">
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="LinkedIn"
          class="icon"
        />
      </a>
      <p>
        &copy; MichaelWachtel |{" "}
        <a
          href="https://github.com/Tikimaniac77/ReactPortfolio/raw/main/src/assets/Michael%20Wachtel%20-%20Brand%20and%20Resume/resume.docx.pdf"
          class="link"
        >
          download resume
        </a>{" "}
        {/* <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">
          color palette
        </a>{" "} */}
        | made with{" "}
        <img
          id="react-icon"
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
      </p>
    </div>
  );
}

export default Footer;
