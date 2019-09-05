import React from 'react';
import { ReadmeButton } from './readme-button';
import { NpmButton } from './npm-button';
import { GithubButton } from './github-button';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';

export function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-scalars">
        <Highlight attribute="scalars" hit={props.hit} />
      </div>
      <div className="hit-language">
        <Highlight attribute="language" hit={props.hit} />
      </div>
      <div className="hit-link">
        <NpmButton hit={props.hit} />
        <GithubButton hit={props.hit} />
        <ReadmeButton hit={props.hit} />
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
