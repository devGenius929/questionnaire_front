import React from 'react';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';
import {
  HouseDoorFill,
  GearFill,
  ArrowRightSquareFill,
  PersonSquare,
  CaretDownFill,
} from 'react-bootstrap-icons';

export default function RightProfileHeader() {
  return (
    <div className="right-profile">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Toggle
              variant=""
              className="dropdown-style drop-bg"
              id="dropdown-basic"
            >
              <Image
                id="image"
                src="/images/newlayout/images/Grupo-de-máscara.png"
                width={40}
                height={40}
                className="rounded-circle"
              />
              <CaretDownFill id="drop-arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="m-auto">
              <Dropdown.Item href="#/action-1" className="spacing-drop">
                <HouseDoorFill className="icons-spacing " />
                Home{' '}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="spacing-drop">
                <GearFill className="icons-spacing " />
                Ajustes
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="spacing-drop">
                <PersonSquare className="icons-spacing " />
                Perfil
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="spacing-drop">
                <ArrowRightSquareFill className="icons-spacing " />
                Sair
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
            x-placement="bottom-start"
            style={{
              position: 'absolute',
              transform:
                'translate3d(0px, 56px, 0px), top: 0px; left: auto, right: 0, will-change: transform,',
            }}
          >
            <a className="dropdown-item" href="#">
              <FormattedMessage id="page.dashboard" />
            </a>
            <a className="dropdown-item" href="#">
              <FormattedMessage id="page.profile.edit" />
            </a>
            <a className="dropdown-item" href="#">
              <FormattedMessage id="page.logout" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
