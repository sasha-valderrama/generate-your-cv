import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Home from './Home';
import Header from './ui/Header';
import Footer from './ui/Footer';

export default function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export const theme = {
  colors: {
    primary: '#FFF587',
    secondary: '#caf0f8',
    tertiary: '#80004C',
    quaternary: '#223978',
    accent: '#FFA113',
    accentSecond: '#ff3b14',
    accentThird: '#FF1212',
    neutral: '#FCD5D5',
    neutralSecond: '#FFA1A1',
    black: '#000',
    white: '#fff',
  },
  fontSize: {
    xxs: '8px',
    xs: '12px',
    sm: '13px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '36px',
    title: '42px',
  },
  fontFamily: {
    monospace: 'monospace',
    main: 'Helvetica',
  },
};
