import * as React from 'react';
import { Session } from '../../typing';
import Head from 'next/head';
export interface IDefaultThemeProps {
  children: React.ReactNode;
  session: Session;
}

export default function DefaultThemeNew(props: IDefaultThemeProps) {
  return (
    <>
      <Head>
        <title>DeclareCerto</title>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.12.1/css/all.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="main-content">{props.children}</div>
    </>
  );
}
