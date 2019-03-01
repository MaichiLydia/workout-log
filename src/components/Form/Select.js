import React from "react";
import PropTypes from "prop-types";

function Select(props) {
  function validate(e) {
    const name = e.target.name
    const value = e.target.value

    if (props.required && value.trim() === "") {
      props.onChange(name, value, "Required Field")
      return;
    }

    props.onChange(name, value)
  }
  return (
    <select className="form__select" name={props.name} onChange={validate} id={props.id}>
      {props.options.map(option => (
        <option className="form__option" value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default Select;