import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-400 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:font-extrabold hover:text-white' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
