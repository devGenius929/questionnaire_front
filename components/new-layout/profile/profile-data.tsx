import * as React from 'react';
import Header from '../core-layout/header';

export default function ProfileScreen() {
  return (
    <>
      <Header />
      <div className="card-profile ">
        <div className="">
          <div className="col-lg-10 my-5 ">
            <form>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <h3 className="profile-title">Perfil</h3>
                </div>
                <div className="form-group col-md-5"></div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputEmail4">Nome</label>
                  <input
                    type="text"
                    className="form-control input-style"
                    id="inputEmail4"
                    placeholder="Nome"
                  />
                </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputPassword4">Email</label>
                  <input
                    type="email"
                    className="form-control input-style"
                    id="inputPassword4"
                    placeholder="usuario@gmail.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label htmlFor="inputEmail4">Numero Whatsapp</label>
                  <input
                    type="text"
                    className="form-control input-style"
                    id="inputEmail4"
                    placeholder="(XX)XXXXX-XXXX"
                  />
                </div>
                <div className="form-group col-md-5 checkbox-input m-auto">
                  <input type="checkbox" name="checkbox1" id="checkbox1" />
                  <label htmlFor="checkbox1">Contador</label>
                  <br />
                  <input type="checkbox" name="checkbox2" id="checkbox2" />
                  <label htmlFor="checkbox2">Contribuinte</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
