import cx from 'classnames';
import React from 'react';
import * as sharedPropTypes from './shared/prop-types';
import FormControl from './FormControl';
import styles from './index.styl';

const propTypes = {
    tag: sharedPropTypes.tag,
};

const defaultProps = {
    tag: 'select',
};

const Select = React.forwardRef(({ className, ...props }, ref) => (
    <FormControl ref={ref} {...props} className={cx(className, styles.select)} />
));

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
