import React from 'react';
import Head from 'next/head';
import bicon from './apple-touch-icon.png';
import micon from './favicon-32x32.png';
import sicon from './favicon-16x16.png';
import safari from './safari-pinned-tab.svg';
import icon from './favicon.ico';

function Meta() {
  return (
    <Head>
      <title>Find a service</title>
      <link rel='shortcut icon' href={icon} />
      <link rel='apple-touch-icon' sizes='180x180' href={bicon} />
      <link rel='icon' type='image/png' sizes='32x32' href={micon} />
      <link rel='icon' type='image/png' sizes='16x16' href={sicon} />
      <link rel='manifest' href='./site.webmanifest' />
      <link rel='mask-icon' href={safari} color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      />
    </Head>
  );
}

export default Meta;
