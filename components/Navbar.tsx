import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const Navbar = () => {
    return (
        <div>
            <Layout className='layout'>
                <Header>
                    <div className='logo' />
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key='1'>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Link href='/qa'>
                                <a>Q&A</a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </div>
    );
};
