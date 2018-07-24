/**
 * Created by RCC on 2018/7/13.
 * 封装loading组件
 */

import  React from 'react';
import propTypes from 'prop-types';
import { notification } from 'antd';

class notification extends React.Component {

    render() {
        const props = {
            ...this.props
        };
        return (
            <notification {...props} />
        )
    }

}

export default notification;
