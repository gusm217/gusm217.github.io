import React from "react";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.jpg";
import whastappIcon from "../images/whatsapp.png";

export default function Contact() {
  return (
    <div>
      <section
        id="contact-me-section"
        className="gap-top bg-black container-fluid d-flex flex-column"
      >
        <h3
          style={{ fontWeight: "700", color: "white" }}
          className="align-self-center"
        >
          CONTACT ME
        </h3>
        <form
          className="w-50 d-flex flex-column align-self-center"
          action="https://formsubmit.co/gusm217@gmail.com"
          method="POST"
        >
          <input
            className="form-control mt-2"
            type="text"
            name="name"
            placeholder="your full name, please"
            required
          />
          <input
            className="form-control mt-2"
            type="email"
            name="email"
            placeholder="mybestemail@teste.com"
            required
          />
          <input
            className="form-control mt-2"
            type="number"
            name="number"
            placeholder="your best phone number"
          />
          <textarea
            className="form-control mt-2"
            placeholder="your text here..."
            name="textarea"
            minLength="50"
            required
          />
          <button className="col-2 btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </form>
        <div className="gap-bot d-flex justify-content-center align-items-center mt-2">
          <a href="https://github.com/gusm217" target="_blank" rel="noreferrer">
            <img width="40px" src={githubIcon} alt="imagem ícone github" />
          </a>
          <a
            href="https://linkedin.com/in/gusm217"
            target="_blank"
            rel="noreferrer"
          >
            <img width="90px" src={linkedinIcon} alt="imagem ícone github" />
          </a>
          <a
            href="https://linkedin.com/in/gusm217"
            target="_blank"
            rel="noreferrer"
          >
            <img width="40px" src={whastappIcon} alt="imagem ícone github" />
          </a>
        </div>
      </section>
    </div>
  );
}
