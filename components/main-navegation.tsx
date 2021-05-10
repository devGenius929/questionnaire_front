import * as React from 'react';
import { useRouter } from 'next/router';

export interface INavigationProps {}

export default function Navegation(props: INavigationProps) {
  const router = useRouter();
  const pathname = router?.pathname;

  return (
    <ul id="nav-one" className="menuprincipalsist dropmenu">
      <li
        id="ip"
        className={pathname === '/informacao-pessoal' ? 'marcado' : ''}
      >
        <a href="/informacao-pessoal">Informações pessoais</a>
      </li>
      <li
        id="declaracao"
        className={pathname === '/declaracoes' ? 'marcado' : ''}
      >
        <a href="/declaracoes">Declaração</a>
      </li>
      <li id="resumo" className={pathname === '/resumo' ? 'marcado' : ''}>
        <a href="/resumo">Resumo e verificação</a>
      </li>
      <li
        id="rankingsist"
        className={pathname === '/resultado/ranking' ? 'marcado' : ''}
      >
        <a href="/resultado/ranking">Resultado / ranking</a>
      </li>
      <li className="acessorapido">
        <a href="/acesso-rapido">Acesso rápido</a>
      </li>
    </ul>
  );
}
