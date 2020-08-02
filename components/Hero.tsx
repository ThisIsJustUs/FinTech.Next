/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui';
import { Layout as ALayout, Typography, Button } from 'antd';
import theme from '../src/theme';
import { Flex } from 'reflexbox';

const { Content } = ALayout;

const HeroContainer = {
    padding: ['50px 10px', '10px', '100px'],
    width: ['90%', '80%', '80%'],
};

export const Hero = () => {
    return (
        <ThemeProvider theme={theme}>
            <Content style={{ backgroundColor: '#f7f7f7' }}>
                <div
                    className='site-layout-content'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div sx={HeroContainer}>
                        <Styled.h2 sx={{ textAlign: 'center' }}>
                            Forget Everything You Know About Insurance
                        </Styled.h2>
                        <Styled.h5
                            sx={{ textAlign: 'center', fontWeight: 'normal' }}
                        >
                            Instant everything. Great prices. Big heart.
                        </Styled.h5>
                        <Flex
                            style={{ margin: '40px 0px' }}
                            justifyContent='center'
                        >
                            <Button
                                sx={{
                                    width: '230px',
                                    height: '50px',
                                    backgroundColor: 'secondary',
                                    borderColor: 'transparent',
                                    boxShadow: 'secondary',
                                }}
                                type='primary'
                                shape='round'
                            >
                                CHECK OUR PRICES
                            </Button>
                        </Flex>
                    </div>
                </div>
            </Content>
        </ThemeProvider>
    );
};
