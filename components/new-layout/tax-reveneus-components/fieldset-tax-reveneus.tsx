import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import IncomeNavegation from '../custom-navegation/income';
import Navegation from './navegation';
import { AuthenticatedProps } from '../../../typing';

export default function FieldsetTaxReveneus({ session }: AuthenticatedProps) {
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>
                  <FormattedMessage id="new-layout.tax-revenues-components.fieldset-tax-revenues.title" />
                </h3>

                <p className="text-muted">
                  <FormattedMessage id="new-layout.tax-revenues-components.fieldset-tax-revenues.subtitle" />
                </p>

                <IncomeNavegation
                  incomeOptions={useSelector(
                    (state) => state.incomeNavegation.options,
                  )}
                />

                <Navegation
                  session={session}
                  backUrl="/2021/nucleo"
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
