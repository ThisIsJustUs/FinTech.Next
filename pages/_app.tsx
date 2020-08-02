import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <link
                href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap'
                rel='stylesheet'
            ></link>
            <link
                href='https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap'
                rel='stylesheet'
            ></link>
            <Component {...pageProps} />
        </div>
    );
}
