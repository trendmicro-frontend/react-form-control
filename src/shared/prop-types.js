import PropTypes from 'prop-types';

export const tag = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]))
]);

export const fcSize = PropTypes.oneOf([
    'lg', 'large',
    'md', 'medium',
    'sm', 'small',
    'xs', 'extra-small',
]);
