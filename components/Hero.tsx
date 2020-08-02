import { Layout as ALayout, Typography, Button } from 'antd';
import { Flex } from 'reflexbox';

const { Content } = ALayout;
const { Title } = Typography;

export const Hero = () => {
    return (
        <Content style={{ backgroundColor: '#f7f7f7' }}>
            <div
                className='site-layout-content'
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <div style={{ padding: '100px', width: '50%' }}>
                    <Title style={{ textAlign: 'center' }}>
                        Forget Everything You Know About Insurance
                    </Title>
                    <Title
                        level={4}
                        style={{
                            textAlign: 'center',
                            fontWeight: 'normal',
                        }}
                    >
                        Instant everything. Great prices. Big heart.
                    </Title>
                    <Flex
                        style={{ margin: '40px 0px' }}
                        justifyContent='center'
                    >
                        <Button
                            style={{
                                width: '230px',
                                height: '50px',
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
    );
};
