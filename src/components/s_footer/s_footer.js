import React from "react";
import "./s_footer.scss";

const S_footer = () => {
  return (
    <div className="con_footer">
      <div className="s_footer_logo">Abdullah Enterprises</div>

      <div className="s_footer_fonts">
        <span className="con_fac">Facebook</span>
        <span className="con_ins">Instagram</span>
        <span className="con_link">Linkedin</span>
      </div>

      <div className="s_footer_icon">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  );
};

export default S_footer;
