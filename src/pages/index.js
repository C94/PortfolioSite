import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang={lang} />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
