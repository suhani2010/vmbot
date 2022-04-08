import React from "react";
import './Enquirylist.css';
const Enquirylist = (props) => {
    const enquiryMarkup = props.options.map((enquiry) => (
      <li key={enquiry.id} className="enquiry-list-item">
        <a
          href={enquiry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="enquiry-list-item-url"
        >
          {enquiry.text}
        </a>
      </li>
    ));
  
    return <ul className="enquiry-list">{enquiryMarkup}</ul>;
  };
  
  export default Enquirylist;