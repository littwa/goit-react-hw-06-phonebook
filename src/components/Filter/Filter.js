import React from "react";
import { filterContainer, filterLabel, filterInput } from "./Filter.module.css";
import PropTypes from "prop-types";

let Filter = ({ filter, handleChangeFilterREDUX }) => {
  return (
    <section className={filterContainer}>
      <label className={filterLabel}>
        Find contacts by name
        <input className={filterInput} onChange={(e) => handleChangeFilterREDUX(e.target.value)} value={filter} name="filter" type="text" autoComplete="off" />
      </label>
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilterREDUX: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
