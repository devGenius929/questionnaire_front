import React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import DonationInMoney from './donation-in-money';
import DonationInAssets from './donation-in-assets';
import Navegation from '../navegation';
import { AuthenticatedProps } from '../../../../typing';

export default function FieldsetDonation({ session }: AuthenticatedProps) {
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar />
              <fieldset>
                <DonationInMoney />
                <DonationInAssets />
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
