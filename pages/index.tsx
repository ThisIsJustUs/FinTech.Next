import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Prices } from '../components/Prices';
import { Row, Col } from 'antd';
import { Flex } from 'reflexbox';

// Index

export default function Index() {
    return (
        <div>
            <Layout>
                <Hero />
                <Prices />
            </Layout>
        </div>
    );
}
