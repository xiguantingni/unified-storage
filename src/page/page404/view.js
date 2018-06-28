/**
 * Created by RCC on 2018/6/27.
 */

import React from 'react';

class Page404 extends React.Component {

    render() {
        return <div style={{textAlign: 'center'}}>
            <span>页面未找到，请重试！</span>
            <br />
            <span>{Math.random()}</span>
        </div>
    }

}

export default Page404;
