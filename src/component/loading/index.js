/**
 * Created by RCC on 2018/7/13.
 * 封装loading组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import './index.css'

class Loading extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <Spin />
                <div className="loading-item-1"></div>
                <div className="loading-item-2"></div>
                <div className="loading-item-3"></div>
                <div className="loading-item-4"></div>
                <div className="loading-item-5"></div>
            </div>
        )
    }

}

Loading.propTypes = {
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    customSize: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),
    style: PropTypes.func,
    className: PropTypes.string
};

Loading.defaultProps = {
    size: 'small',
    customSize: {}
};

export default Loading;
