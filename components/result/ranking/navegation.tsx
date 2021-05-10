import * as React from 'react';

export interface INavigationProps {}

export default function Navegation(props: INavigationProps) {
  return (
    <div className="cxsubmenusistema">
      <ul className="submenusistema">
        <li id="ranking">
          <a href="/resultado/ranking">Ranking</a>
        </li>
        <li id="exportacao">
          <a href="/resultado/exportacao">Exportação</a>
        </li>
      </ul>
    </div>
  );
}
