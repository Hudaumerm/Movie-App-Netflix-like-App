import React from "react";
import { ul,li } from 'mdb-ui-kit'
import './Footer.css'

import { Link } from "react-router-dom";

function FooterColumn({ linksToDisplay, keys }) {
  return (
    
         <div className="footer-links col-lg-3 col-md-3 col-sm-3  mb-md-0">
      <ul key={keys} className="list-unstyled mb-0">
        {linksToDisplay.map((item) => (
          <Link><li>{item.link}</li></Link>
        ))}
      </ul>

    </div>
  );
}

export default FooterColumn;
