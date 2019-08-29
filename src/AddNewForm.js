import React from 'react';
import './add-new-form.css';

export function AddNewForm({ setModalOpen }) {
  return (
    <>
      <h2 className="modal-title">
        Add New Custom Scalar
        <button
          className="modal-close-button"
          onClick={() => setModalOpen(false)}
        >
          close
        </button>
      </h2>

      <form
        className="modal-form"
        name="new_package"
        method="post"
        action="/thanks"
      >
        <input type="hidden" name="form-name" value="new_package" />
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <input
          type="text"
          name="name"
          placeholder="Enter the name of the package..."
          required
          className="modal-form-input"
        />
        <input
          type="url"
          name="url"
          placeholder="Enter the url..."
          required
          className="modal-form-input"
        />
        <input
          type="text"
          name="scalars"
          placeholder="Enter the scalars as comma separated values (JSON, Date, etc)..."
          className="modal-form-input"
        />
        <input
          type="text"
          name="language"
          placeholder="Enter the language (javascript, java, php, etc)..."
          className="modal-form-input"
        />
        <button
          className="modal-form-submit-button"
          type="submit"
          title="Submit new package"
        >
          Submit
        </button>
      </form>
    </>
  );
}
