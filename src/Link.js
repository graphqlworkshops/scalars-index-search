import React from 'react';
import PropTypes from 'prop-types';

export function Link({ href, children, styleName }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styleName}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  styleName: PropTypes.string,
};
