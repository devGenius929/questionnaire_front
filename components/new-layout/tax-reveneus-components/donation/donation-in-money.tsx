import React from 'react';
import SelectPerson from '../../../select-person';

export default function DonationInMoney() {
  return (
    <>
      <h3>Doação Recebida em Dinheiro</h3>

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
              Doador*
            </label>
            <input
              type="text"
              id="NameSourcePayingIncomesWithTax"
              className="form-control"
              placeholder="Nome Completo"
            />
          </div>

          <div className="col-sm-6 m-auto">
            <label className="form-control-placeholder" htmlFor="CPFOrigin">
              CNPJ/CPF*
            </label>
            <input
              type="text"
              id="CPFOrigin"
              className="form-control"
              placeholder="CNPJ/CPF"
            />
          </div>

          <div className="col-sm-12 m-auto">
            <label className="form-control-placeholder" htmlFor="IncomeWithTax">
              Total recebido (R$)
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
