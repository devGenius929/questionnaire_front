import * as React from 'react';
import { Session } from '../typing';

export interface IHeaderProps {
  session: Session;
}

function loggedIn(user: String) {
  return (
    <div className="fxheader">
      <div className="site">
        <ul className="infoslogado">
          <li className="logo">
            <img src="/images/logo/Logo.png" className="logo" />
          </li>
          <li className="loginuser">Olá {user}</li>
          <li>•</li>
          <li>
            <a href="/api/logout" title="Sair">
              sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function notLoggedIn() {
  return (
    <div className="fxheader">
      <div className="site">
        <ul className="infoslogado">
          <li className="logo">
            <img src="/images/logo/Logo.png" className="logo" />
          </li>
          <li className="loginuser">
            <a href="/api/login" title="Entrar">
              entrar
            </a>
          </li>
          <li>•</li>
          <li>
            <a href="/Ajuda" title="Precisando de Ajuda? Clique aqui">
              ajuda
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Header({ session }: IHeaderProps) {
  if (session && session.user) {
    return loggedIn(session.user.nickname);
  }

  return notLoggedIn();
}
