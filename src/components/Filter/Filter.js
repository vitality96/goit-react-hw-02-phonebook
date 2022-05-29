import React from "react";
import PropTypes from 'prop-types';


const Filter = ({handleChange, filter }) => {
    return (
        <label>Find contacts by name
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}>
            </input>
        </label>
    );
};

export default Filter;


Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};