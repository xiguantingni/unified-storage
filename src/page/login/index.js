/**
 * Created by RCC on 2018/6/7.
 */

import { connect } from 'dva';
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import style from './index.css'

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                this.props.dispatch({
                    type: 'login/loginRequest',
                    payload: values,
                    successCallback: () => {
                        console.log('成功之后的回调')
                    }
                })
            }
        })
    };
    handleClick1 = () => {
        console.log(this.props)
        this.props.history.push('/#/')
    };
    handleClick2 = () => {
        console.log(this.props)
        this.props.history.push('/login/')
    };
    render() {
        const { loading } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={style["form-style"]}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                        <Input prefix={<Icon type="user" />} placeholder="username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }]
                    })(
                        <Input prefix={<Icon type="lock" />} placeholder="password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                    >
                        Log in
                    </Button>
                </FormItem>

                <Button onClick={this.handleClick1}>切换连接到：#</Button>
                <Button onClick={this.handleClick2}>切换连接到：login</Button>
            </Form>
        )
    }
}

const Login = Form.create()(LoginForm);

const mapStateToProps = (state) => {
    return {
        ...state.login
    }
};

export default connect(mapStateToProps)(Login);
