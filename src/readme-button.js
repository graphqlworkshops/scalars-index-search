import React from 'react';
import { Link } from './Link';

export function ReadmeButton({ hit }) {
  if (!hit || !hit.readme) return null;
  return (
    !hit.package &&
    hit.readme && (
      <Link styleName="open-button" href={hit.readme}>
        Read Me
      </Link>
    )
  );
}
