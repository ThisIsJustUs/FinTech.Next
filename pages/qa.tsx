import Link from 'next/link';
import { Layout } from '../components/Layout';

const QAPage = () => (
    <Layout title='About | Next.js + TypeScript Example'>
        <h1>Q&A</h1>
        <p>This is the Q&A page</p>
        <p>
            <Link href='/'>
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
);

export default QAPage;
