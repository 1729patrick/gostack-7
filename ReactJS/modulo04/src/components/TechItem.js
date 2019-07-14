import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech, onDelete }) => (
  <li>
    {tech}
    <button onClick={onDelete} type="button">
      x
    </button>
  </li>
);

TechItem.defaultProps = {
  tech: "oculto"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
