/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { connect } from 'react-redux';

class ClientGroup extends React.Component {
    render() {
        return (
            <div>这是客户端组页面</div>
        )
    }
}

export default connect(null, null)(ClientGroup);
