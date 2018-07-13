/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { connect } from 'react-redux';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legendScroll';

class AccessPath extends React.Component {
    constructor(props) {
        super(props);
        this.setPieOption = this.setPieOption.bind(this);
        this.initPie = this.initPie.bind(this);
    }

    initPie() {
        const { data } = this.props; //外部传入的data数据
        let myChart = echarts.init(this.pie, 'dark'); //初始化echarts

        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data);
        //设置options
        myChart.setOption(options)
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }
    render() {
        return (
            <div className="pie-react">
                <div ref={(c) => this.pie = c} style={{width: "700px", height: "400px"}}></div>
            </div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {

        return {
            title: {
                text: '计算机运行分析',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['cpu','网络','硬盘'],
                tooltip: {
                    show: true,
                    formatter: (pa) => {
                        return "123456"
                    }
                },
                animation: false
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {show: true, type: ['stack', 'tiled']},
                    saveAsImage: {show: true}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'cpu',
                type: 'line',
                smooth: true,
                data: [10, 12, 21, 54, 260, 830, 710]
            },
            {
                name: '网络',
                type: 'line',
                smooth: true,
                data: [30, 182, 434, 791, 390, 30, 10]
            },
            {
                name: '硬盘',
                type: 'line',
                smooth: true,
                data: [1320, 1132, 601, 234, 120, 90, 20]
            }]
        };
    }
}

export default connect(null, null)(AccessPath);
