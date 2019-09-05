import React from 'react';
import { Link } from './Link';

export function NpmButton({ hit }) {
  if (!hit || !hit.package || !hit.package.links || !hit.package.links.npm)
    return null;
  return (
    <Link styleName="npm-button" href={hit.package.links.npm}>
      <svg
        viewBox="0 0 18 7"
        id="add16bc847150b3497e55579f4e2e71b"
        className="npm-icon"
      >
        {' '}
        <path d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"></path>{' '}
      </svg>
    </Link>
  );
}
