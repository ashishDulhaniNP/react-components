import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class NpInput extends Component {

    render() {
        const { props } = this;

        return (
            <div className="form-group col-lg-3 col-sm-4">
                <label for={`${props.id}_input`} className="d-flex label-name align-self-start">{props.label}</label>
                <input
                    className="form-control"
                    id={`${props.id}_input`}
                    name={props.name}
                    type={props.inputType}
                    value={props.content}
                    onChange={props.controlFunc}
                    placeholder={props.placeholder} />
            </div>
        )
    }
}

NpInput.propTypes = {
    label: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    id: PropTypes.any.isRequired,
    controlFunc: PropTypes.func,
    content: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    placeholder: PropTypes.string,
};

export default NpInput;