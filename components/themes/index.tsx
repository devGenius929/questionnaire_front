import * as React from 'react';
import Header from '../main-header';
import Navegation from '../main-navegation';
import { Session } from '../../typing';

export interface IDefaultThemeProps {
  children: React.ReactNode;
  session: Session;
}

export default function DefaultTheme(props: IDefaultThemeProps) {
  return (
    <>
      <Header session={props.session} />
      <div className="site">
        <div className="clearall">&nbsp;</div>
        <div className="colunaesqsistema">
          <Navegation />
          <div id="divConteudoDinamico" className="boxcontsist">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
