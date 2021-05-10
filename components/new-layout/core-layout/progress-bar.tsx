/* eslint-disable operator-linebreak */
import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

export default function ProgressBar2({ percent }: any) {
  return (
    <>
      <ProgressBar
        percent={percent}
        filledBackground="linear-gradient(to right, #50812E, #50812E)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
              src="/images/newlayout/images/progress-bar-icons/1 - Nucleo Familia.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
              src="/images/newlayout/images/progress-bar-icons/2 - Rendimentos.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
              src="/images/newlayout/images/progress-bar-icons/3 - Despesas.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="40"
                src="/images/newlayout/images/progress-bar-icons/6 - Financas"
              />
            </>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="40"
                src="/images/newlayout/images/progress-bar-icons/5 - Bens.png"
              />
            </>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="40"
                src="/images/newlayout/images/progress-bar-icons/7 - Icon 7.png"
              />
            </>
          )}
        </Step>
      </ProgressBar>
      <br />
    </>
  );
}
