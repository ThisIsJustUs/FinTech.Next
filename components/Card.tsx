/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui';
import theme from '../src/theme';
import { Typography, Card as AntCard, Button } from 'antd';
import { Flex } from 'reflexbox';

const { Title, Text } = Typography;

interface CardProps {
    title: string;
    price: string;
    cta: string;
}

export const Card = ({ title, price, cta }: CardProps) => (
    <ThemeProvider theme={theme}>
        <AntCard bordered={true}>
            <Flex
                justifyContent='center'
                flexDirection='column'
                alignItems='center'
                sx={{ margin: '20px 0px' }}
            >
                <Flex justifyContent='center'>
                    <Title
                        style={{ textAlign: 'center', width: '75%' }}
                        level={2}
                    >
                        {title}
                    </Title>
                </Flex>
                <Text style={{ textAlign: 'center' }} type='secondary'>
                    MONTHLY, FROM*
                </Text>
                <Styled.h1 style={{ fontSize: '50px', margin: '20px 0px' }}>
                    {price}
                </Styled.h1>
                <Button
                    sx={{
                        width: '70%',
                        height: '40px',
                        backgroundColor: 'secondary',
                        borderColor: 'transparent',
                        boxShadow: 'secondary',
                    }}
                    type='primary'
                    shape='round'
                >
                    {cta}
                </Button>
            </Flex>
        </AntCard>
    </ThemeProvider>
);
