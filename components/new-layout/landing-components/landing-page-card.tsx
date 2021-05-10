import React from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

export default function CardOne() {
  const router = useRouter();

  return (
    <div className="card card1">
      <div className="row d-flex1 pt-3 d-none">
        <h6 className="logo">
          <img
            src="/images/newlayout/images/logos/Declare-Certo-logo.png"
            alt=""
          />
        </h6>
      </div>
      <div className="row justify-content-center my-auto">
        <div className="col-lg-8 my-5 text-center nucelo-full">
          <fieldset>
            <h3>
              <FormattedMessage id="home.welcome" />
            </h3>
            <p className="text-muted">
              <FormattedMessage id="home.welcome.description" />
            </p>
            <img
              src="/images/newlayout/images/video-img.svg"
              alt="Video Image"
              className="video-v"
            />

            <button
              className="btn btn-start-declaration green-bg"
              data-img="images/step2.svg"
              onClick={() => router.push('/2021/nucleo')}
            >
              <FormattedMessage id="landing-components.landing-page-card.start-declaration" />
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
