import cx from 'classnames';
import React from 'react';
import * as sharedPropTypes from './shared/prop-types';
import FormControl from './FormControl';
import styles from './index.styl';

const propTypes = {
    tag: sharedPropTypes.tag,
    fcSize: sharedPropTypes.fcSize,
};

const defaultProps = {
    tag: 'select',
    fcSize: 'md',
};

const Select = ({ className, ...props }) => (
    <FormControl {...props} className={cx(className, styles.select)} />
);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
