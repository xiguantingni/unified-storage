/**
 * Created by RCC on 2018/7/13.
 * 封装loading组件
 */

import  React from 'react';
import propTypes from 'prop-types';
import { Spin, Icon } from 'antd';

class Loading extends React.Component {

    render() {
        const props = {
            ...this.props,
            indicator: <Icon type="loading" />
        };
        return (
            <Spin {...props} />
        )
    }

}

export default Loading;
