/**
 * Created by RCC on 2018/7/13.
 * loading组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import './index.css'

const SIZE = {
    small: { width: 50, height: 50 },
    middle: { width: 100, height: 100 },
    large: { width: 200, height: 200 }
};

class Loading extends React.Component {
    render() {
        const { type, size, style,  className} = this.props;
        return (
            <div style={style} className={className + ' loading-container'}>
                <div style={size || SIZE[type]} className="loading-view">
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                    <div className="item item-5"></div>
                </div>
            </div>
        )
    }
}

Loading.propTypes = {
    type: PropTypes.oneOf(['small', 'middle', 'large']),
    size: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),
    style: PropTypes.object,
    className: PropTypes.string
};

Loading.defaultProps = {
    type: 'middle',
    size: null,
    style: {},
    className: ''
};

export default Loading;
