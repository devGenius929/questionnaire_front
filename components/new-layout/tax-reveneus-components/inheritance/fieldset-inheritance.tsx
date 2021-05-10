import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import InheritanceInMoney from './inheritance-in-money';
import InheritanceInAssets from './inheritance-in-assets';
import Navegation from '../navegation';
import { AuthenticatedProps } from '../../../../typing';

export default function FieldsetIncomesWithTax({
  session,
}: AuthenticatedProps) {
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <InheritanceInMoney />
                <InheritanceInAssets />
                <Navegation
                  session={session}
                  backUrl="/2021/arrecadacao"
                  nextUrl="/2021/despesas"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
