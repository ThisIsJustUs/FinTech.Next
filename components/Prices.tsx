/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui';
import { Flex } from 'reflexbox';
import { Card } from '../components/Card';
import { Row, Col } from 'antd';
import theme from '../src/theme';

export const Prices = () => (
    <ThemeProvider theme={theme}>
        <Row justify='center' style={{ margin: '30px 0px' }}>
            <Row justify='center'>
                <Col span={24}>
                    <Flex justifyContent='center'>
                        <Styled.h3
                            sx={{
                                width: '80%',
                                maxWidth: '650px',
                                textAlign: 'center',
                            }}
                        >
                            Monthly Subscription, Cancel Anytime
                        </Styled.h3>
                    </Flex>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col
                    style={{ margin: '20px 0px' }}
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                >
                    <Card
                        title='Contents Insurance'
                        price='2 €'
                        cta='Get Contents'
                    />
                </Col>
                <Col
                    style={{ margin: '20px 0px' }}
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                >
                    <Card
                        title='Liability Insurance'
                        price='2 €'
                        cta='Get Liability'
                    />
                </Col>
                <Col
                    style={{ margin: '20px 0px' }}
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                >
                    <Card
                        title='Contents and Liability Package'
                        price='4 €'
                        cta='Get BOTH!'
                    />
                </Col>
            </Row>
        </Row>
    </ThemeProvider>
);
