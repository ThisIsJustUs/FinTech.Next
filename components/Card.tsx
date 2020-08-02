import { Typography, Card as AntCard, Button } from 'antd';
import { Flex } from 'reflexbox';

const { Title, Text } = Typography;

interface CardProps {
    title: string;
    price: string;
    cta: string;
}

export const Card = ({ title, price, cta }: CardProps) => (
    <AntCard bordered={false}>
        <Flex
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
        >
            <Flex justifyContent='center'>
                <Title style={{ textAlign: 'center', width: '75%' }} level={2}>
                    {title}
                </Title>
            </Flex>
            <Text style={{ textAlign: 'center' }} type='secondary'>
                MONTHLY, FROM*
            </Text>
            <Title style={{ fontSize: '50px', margin: '20px 0px' }} level={1}>
                {price}
            </Title>
            <Button
                style={{ width: '70%', height: '40px' }}
                type='primary'
                shape='round'
            >
                {cta}
            </Button>
        </Flex>
    </AntCard>
);
