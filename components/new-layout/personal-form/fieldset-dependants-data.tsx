import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import MaskedInput from '../../masked-input';

export default function FieldsetDependantsData() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={0} />
              <fieldset>
                <h3>Dados Pessoais Dependentes</h3>

                <p className="text-muted">
                  Agora entre com os dados dos dependentes ou alimentandos
                </p>

                <div className="form-group">
                  <h6>Marido/Esposa</h6>
                  <div className="row">
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nome Completo*
                      </label>
                      <input
                        type="text"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nascimento
                      </label>
                      <input
                        type="date"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        CPF*
                      </label>
                      <MaskedInput
                        id="CPF"
                        mask="99.999.999/9999-99"
                        name="CPF"
                        className="form-control"
                        value=""
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </div>
                  </div>

                  <h6>Filha(o) até 21 anos</h6>
                  <div className="row">
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nome Completo*
                      </label>
                      <input
                        type="text"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nascimento
                      </label>
                      <input
                        type="date"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        CPF*
                      </label>
                      <input
                        type="text"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="CPF"
                      />
                    </div>
                  </div>

                  <h6>Alimentando</h6>
                  <div className="row">
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nome Completo*
                      </label>
                      <input
                        type="text"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nascimento
                      </label>
                      <input
                        type="date"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        CPF*
                      </label>
                      <input
                        type="text"
                        id="name1"
                        className="form-control"
                        required
                        placeholder="CPF"
                      />
                    </div>
                    <div className="col-sm-8 col-lg-7 ">
                      <div className="radio">
                        <input id="radio-3" name="Nao" type="radio" />
                        <label htmlFor="radio-3" className="radio-label">
                          Brasil
                        </label>
                        <input id="radio-4" name="Nao" type="radio" />
                        <label htmlFor="radio-4" className="radio-label">
                          Exterior
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dependentes');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao');
                  }}
                >
                  Continuar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
