import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  CurrentRefinements,
  Configure,
  PoweredBy,
} from 'react-instantsearch-dom';
import Modal from 'react-modal';
import { AddNewForm } from './AddNewForm';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  '8RFSWE8Z0J',
  '9c529a7e71015ee8fb94e3c1faac6f07'
);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-45%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  function afterOpenModal() {
    return false;
  }

  return (
    <div className="ais-InstantSearch">
      <h1>
        GraphQL Custom Scalars{' '}
        <button className="add-button" onClick={() => setModalOpen(true)}>
          ADD NEW
        </button>
      </h1>
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Add New Custom Scalar"
        style={customStyles}
      >
        <AddNewForm setModalOpen={setModalOpen} />
      </Modal>
      <InstantSearch indexName="dev_SCALAR_NAME" searchClient={searchClient}>
        <SearchBox />
        <div className="left-panel">
          <ClearRefinements />
          <h2 className="filters">Language</h2>
          <RefinementList attribute="language" />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <CurrentRefinements />
          <Hits hitComponent={Hit} />
          <Pagination />

          <PoweredBy />
          <button
            className="add-button-mobile"
            onClick={() => setModalOpen(true)}
          >
            ADD NEW
          </button>
        </div>
      </InstantSearch>
    </div>
  );
}

function Hit(props) {
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
        <a
          href={props.hit.readme}
          target="_blank"
          rel="noopener noreferrer"
          className="open-button"
        >
          Open
        </a>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
