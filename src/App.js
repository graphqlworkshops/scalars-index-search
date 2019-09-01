import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  CurrentRefinements,
  Configure,
  PoweredBy,
} from 'react-instantsearch-dom';
import Modal from 'react-modal';
import { AddNewForm } from './AddNewForm';
import './App.css';
import ReactGA from 'react-ga';
import { Hit } from './Hit';

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

  function addNew() {
    setModalOpen(true);
    ReactGA.event({
      category: 'User',
      action: 'Add a New Scalar',
    });
  }

  return (
    <div className="ais-InstantSearch">
      <h1>
        GraphQL Custom Scalars{' '}
        <button className="add-button" onClick={addNew}>
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
      <InstantSearch indexName="dev_SCALAR_NAME_v2" searchClient={searchClient}>
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

export default App;
