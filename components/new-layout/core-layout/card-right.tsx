/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AuthenticatedProps } from '../../../typing/index';
interface propsCard {
  img: string;
  children: any;
}
export default function CardTwo(prop: propsCard, props: AuthenticatedProps) {
  return (
    <>
      <div className="card card2">
        <img id="image" src={prop.img} />
        {prop.children}
      </div>
    </>
  );
}
