/**
 * Created by RCC on 2018/7/13.
 * loading组件
 */

import React from 'react';
import PropTypes from 'prop-types';

class NoData extends React.Component {
    render() {
        const { style, className } = this.props;
        return (
            <div className={className + ' nodata-container'} style={style}>
                <i className="iconfont icon-nodata" style={{fontSize: 60}} />
                <span style={{fontSize: 16, marginLeft: 16}}>暂无数据</span>
            </div>
        )
    }
}

NoData.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
};

NoData.defaultProps = {
    style: {},
    className: ''
};

export default NoData;
