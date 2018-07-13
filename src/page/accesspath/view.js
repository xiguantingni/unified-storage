/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import Loading from '@component/loading';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

class AccessPath extends React.Component {

    constructor(props) {
        super(props);
        this.setPieOption = this.setPieOption.bind(this);
        this.initPie = this.initPie.bind(this);
        this.state = {
            count: 90
        };
    }

    initPie() {
        const { data } = this.props; //外部传入的data数据
        let myChart = echarts.init(this.pie, 'dark'); //初始化echarts

        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data);
        //设置options
        myChart.setOption(options);
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }

    handleData(data) {
        let result = JSON.parse(data);
        this.setState({count: this.state.count + result.movement});
    }

    // Websocket示例
    //<Websocket
    //url='ws://localhost:8888/live/product/12345/'
    //onMessage={this.handleData.bind(this)}
    ///>

    render() {
        return (
            <div>
                <div className="pie-react" style={{display: 'flex', justifyContent: 'center'}}>
                    <div ref={(c) => this.pie = c} style={{width: "300px", height: "200px"}}></div>
                    <div>
                        Count: <strong>{this.state.count}</strong>
                    </div>
                </div>
                <div style={{width: '100%', height: 300, border: '1px solid grey'}}>
                    <Loading
                        tip="loading..."
                        size="small"
                        delay={1000}
                        wrapperClassName="aaa"
                    />
                </div>
            </div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {

        const _data = [
            {value: 1, name: "是"},
            {value: 2, name: "否"}
        ];

        const option1 = {
            title: {
                id: '123',
                show: true,
                text: '这是title',
                link: '/overview',
                target: 'self',
                textStyle: {
                    color: 'red'
                },
                subtext: '这是子title', // link, target, textStyle 同上
                //padding: [5, 15],
                itemGap: 50,
                zlevel: -1, // 即css的z-index属性，但其会创建一个新的图层
                z: 2, // 跟上的区别在于不会创建新的图层，且优先级较低
                left: 'right', // 可以是 20 '20%' 'left' 'center' 'right'.// right bottom top 属性同样如此
                //backgroundColor: 'grey',
                borderColor: 'yellow',
                borderWidth: 2,
                borderRadius: 3, // 也可以是数组，即css的border-radius属性
                shadowColor: 'rgba(0, 255, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 5,
                shadowOffsetY: 5 // 以上四个属性，需一起使用，共同设置阴影效果
            },
            grid: {},
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: true,
                    data: _data || data, //传入外部的data数据
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '18'
                            },
                            formatter: "{d}% \n{b}"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        };

        const option2 = {
            series: [{
                type: 'liquidFill',
                data: [0.6, 0.5, 0.4, 0.3],
                radius: '80%'
            }]
        };

        return option1;
    }
}

export default connect(null, null)(AccessPath);
