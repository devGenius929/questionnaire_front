/* eslint-disable operator-linebreak */
import * as React from 'react';
import { useRouter } from 'next/router';

function canBeDisplayed() {
  const router = useRouter();
  console.log(router.pathname);
  return router.pathname == '/2021/resultado'
    ? { display: 'inline' }
    : router.pathname == '/2021/ranking'
    ? { display: 'inline' }
    : { display: 'none' };
}
export default function CasesRefound() {
  return (
    <div className="restituir-cus" style={canBeDisplayed()}>
      <ul>
        <li>
          <p>Melhor</p>
          <h4 className="green-text">R$ 400 a restituir</h4>
        </li>
        <li>
          <p>Pior cenario</p>
          <h4 className="red-text">R$ 550 a pagar</h4>
        </li>
      </ul>
    </div>
  );
}
