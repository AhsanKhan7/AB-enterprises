import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">Abdullah Enterprises</div>
      <div className="footer_desription">
        <p>
          A paragraph is a series of related sentences developing a central
          idea, called the topic. Try to think about paragraphs in terms of
          thematic unity: a paragraph is a sentence or a group of sentences that
          supports one central, unified idea. Paragraphs add one idea at a time
          to your broader argument.
        </p>
      </div>
      <div className="footer_projects">Works</div>
      <div className="footer_project_elements">
        <div>Pharma</div>
        <div style={{ marginTop: "15px" }}>Education</div>
        <div style={{ marginTop: "15px" }}>Panaflex</div>
        <div style={{ marginTop: "15px" }}>Books</div>
      </div>
      <div className="footer_contacts">Contacts</div>
      <div className="footer_contact_elements">
        <div>Gmail</div>
        <div style={{ marginTop: "15px" }}>Facebook</div>
        <div style={{ marginTop: "15px" }}>Instagram</div>
        <div style={{ marginTop: "15px" }}>Linkedin</div>
      </div>
    </div>
  );
};

export default Footer;
