import React from 'react';
import LeftProfile from './left-profile';
import RightProfileHeader from './right-profile';
export default function Header() {
  return (
    <>
      <header className="site-header ">
        <LeftProfile />
        <RightProfileHeader />
      </header>
    </>
  );
}
