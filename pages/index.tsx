import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Row, Col, Typography, Card } from 'antd';
import { Flex } from 'reflexbox';

const { Title } = Typography;

const cardBox = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: 'red',
};

const CustomCard = () => {
    return (
        <Card bordered={false}>
            <Flex justifyContent='center'>
                <Title style={{ width: '30%' }} level={2}>
                    Contents Insurance
                </Title>
            </Flex>
        </Card>
    );
};

export default function Index() {
    return (
        <div>
            <Layout>
                <Hero />
                <div className='site-card-wrapper'>
                    <Row style={{ margin: '0px 20px' }} gutter={32}>
                        <Col style={{ backgroundColor: 'red' }} span={8}>
                            <CustomCard />
                        </Col>
                        <Col span={8}>
                            <CustomCard />
                        </Col>
                        <Col span={8}>
                            <CustomCard />
                        </Col>
                    </Row>
                </div>
            </Layout>
        </div>
    );
}
