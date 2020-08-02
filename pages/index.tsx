import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Row, Col } from 'antd';
import { Flex } from 'reflexbox';

export default function Index() {
    return (
        <div>
            <Layout>
                <Hero />
                <Flex className='site-card-wrapper' justifyContent='center'>
                    <Row style={{ margin: '0px 20px' }} gutter={32}>
                        <Col span={8}>
                            <Card
                                title='Contents Insurance'
                                price='2€'
                                cta='Get Contents'
                            />
                        </Col>
                        <Col span={8}>
                            <Card
                                title='Liability Insurance'
                                price='2€'
                                cta='Get Liability'
                            />
                        </Col>
                        <Col span={8}>
                            <Card
                                title='Contents and Liability Package'
                                price='4€'
                                cta='Get BOTH!'
                            />
                        </Col>
                    </Row>
                </Flex>
            </Layout>
        </div>
    );
}
