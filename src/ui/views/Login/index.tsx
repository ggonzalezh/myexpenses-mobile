import { Button, Col, Form, Input, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'

export const Login = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <Row justify='center'>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Form
              layout='vertical'
              name='login'
              onFinish={() => null}
              onFinishFailed={() => null}
              autoComplete='off'
            >
              <Form.Item
                label='Usuario'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Por favor, introduzca su nombre de usuario.'
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Contraseña'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Por favor, introduzca su contraseña.'
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type='primary' htmlType='submit'>
                  Ingresar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
