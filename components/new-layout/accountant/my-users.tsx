import * as React from 'react';
import Header from '../core-layout/header';
import Image from 'next/image';
import { PlusCircleFill, CaretDownFill } from 'react-bootstrap-icons';
import { Button, Dropdown } from 'react-bootstrap';

export default function MyUsers() {
  return (
    <>
      <Header />

      <div className="card-profile ">
        <div className="">
          <div className="col-lg-10 my-5 ">
            <form>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <h3 className="profile-title">Meus Usuários</h3>
                </div>

                <div className="form-group col-md-5"></div>
                <div className="form-group col-md-5">
                  <Button variant="success" className="border-radius">
                    <PlusCircleFill className="spacing-button" /> {''}Novo
                    Usuário
                  </Button>
                </div>
                <div className="form-group col-md-5"></div>
                <div className="form-group col-md-5">
                  <div className="accountant-card">
                    <Image
                      id="image"
                      src="/images/newlayout/images/Grupo-de-máscara.png"
                      width={50}
                      height={50}
                      className=" rounded-circle"
                    />
                    <label className="name-card">Carlos Santos</label>
                    <Dropdown className="drop-services">
                      <Dropdown.Toggle variant="" className="drop-toggle">
                        2 Serviços <CaretDownFill />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          className="select-services"
                        >
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          className="select-services"
                        >
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          className="select-services"
                        >
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="form-group col-md-5">
                  <div className="accountant-card">
                    <Image
                      id="image"
                      src="/images/newlayout/images/Grupo-de-máscara.png"
                      width={50}
                      height={50}
                      className=" rounded-circle"
                    />
                    <label className="name-card">Carlos Santos</label>
                    <Dropdown className="drop-services">
                      <Dropdown.Toggle variant="" className="drop-toggle">
                        2 Serviços <CaretDownFill />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          className="select-services"
                        >
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          className="select-services"
                        >
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          className="select-services"
                        >
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="form-group col-md-5">
                  <div className="accountant-card">
                    <Image
                      id="image"
                      src="/images/newlayout/images/Grupo-de-máscara.png"
                      width={50}
                      height={50}
                      className=" rounded-circle"
                    />
                    <label className="name-card">Carlos Santos</label>
                    <Dropdown className="drop-services">
                      <Dropdown.Toggle variant="" className="drop-toggle">
                        2 Serviços <CaretDownFill />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          className="select-services"
                        >
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          className="select-services"
                        >
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          className="select-services"
                        >
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="form-group col-md-5">
                  <div className="accountant-card">
                    <Image
                      id="image"
                      src="/images/newlayout/images/Grupo-de-máscara.png"
                      width={50}
                      height={50}
                      className=" rounded-circle"
                    />
                    <label className="name-card">Carlos Santos</label>
                    <Dropdown className="drop-services">
                      <Dropdown.Toggle variant="" className="drop-toggle">
                        2 Serviços <CaretDownFill />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          className="select-services"
                        >
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          className="select-services"
                        >
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          className="select-services"
                        >
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
