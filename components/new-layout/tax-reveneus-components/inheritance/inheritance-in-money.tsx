import React from 'react';
import SelectPerson from '../../../select-person';
import MaskedInput from '../../../masked-input';

export default function IncomeWithTax() {
  return (
    <>
      <h3>Herança Recebida em Dinheiro</h3>

      <div className="form-group">
        <div className="row">
          <div className="col-sm-6 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="nameReceived"
              title="Quem recebeu?"
            >
              Quem recebeu?
            </label>
            <SelectPerson onChange={(person) => console.log(person)} />
          </div>

          <div className="col-sm-6 m-auto"></div>

          <div className="col-sm-6 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="NameSourcePayingIncomesWithTax"
            >
              A Quem Pertencia*
            </label>
            <input
              type="text"
              id="NameSourcePayingIncomesWithTax"
              className="form-control"
              placeholder="Nome Fonte Pagadora"
            />
          </div>

          <div className="col-sm-6 m-auto">
            <label className="form-control-placeholder" htmlFor="CPFOrigin">
              CPF*
            </label>
            <MaskedInput
              id="CPF"
              mask="999.999.999-99"
              name="CPF"
              className="form-control"
              value=""
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          <div className="col-sm-12 m-auto">
            <label className="form-control-placeholder" htmlFor="IncomeWithTax">
              Total herdado (R$)
            </label>
            <input
              type="text"
              id="IncomeWithTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-12 plus-icon">
            <i className="fal fa-minus"></i>Excluir último rendimento
          </div>

          <div className="col-sm-12 plus-icon">
            <i className="fal fa-plus add_more_incluir"></i>Incluir novo
            rendimento
          </div>
        </div>
      </div>
    </>
  );
}
