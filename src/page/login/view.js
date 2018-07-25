/**
 * Created by RCC on 2018/6/20.
 */

import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import style from './index.css'
import { dispatch } from '@util/dispatch';
import { connect } from 'react-redux'

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                dispatch({
                    type: 'login/loginRequest',
                    payload: {
                        url: '/login',
                        method: 'POST',
                        body: values,
                        successCallback: () => {
                            this.props.history.push('/overview');
                        }
                    }
                })
            }
        })
    };
    render() {
        console.log(this.props);
        const { loading } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="form-style">
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
                        style={{width: '100%'}}
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                    >
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

const Login = Form.create()(LoginForm);

export default connect(({login}) => ({...login}))(Login);
