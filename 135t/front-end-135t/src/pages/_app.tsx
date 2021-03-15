import { ThemeProvider } from '@material-ui/core/styles';
import App, { AppProps } from 'next/app';
import { useEffect } from 'react';
import { muiTheme } from 'src/theme';
import 'src/assets/application.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />

    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  return { ...(await App.getInitialProps(appContext)) };
};

export default MyApp;