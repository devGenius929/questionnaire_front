import React from 'react';
import SelectPerson from '../../../select-person';
import SelectAssetCode from '../../core-layout/select-asset-code';
import SelectCountry from '../../core-layout/select-country';
import MaskedInput from '../../../masked-input';

export default function IncomeWithTax() {
  return (
    <>
      <h3>Herança Recebida em Bens</h3>

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
              placeholder="Nome Completo"
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

          <div className="col-sm-6 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="NameSourcePayingIncomesWithTax"
            >
              Código do bem*
            </label>
            <SelectAssetCode onChange={(o) => {}} />
          </div>

          <div className="col-sm-6 m-auto">
            <label className="form-control-placeholder" htmlFor="CPFOrigin">
              País*
            </label>
            <SelectCountry onChange={(o) => {}} />
          </div>

          <div className="col-sm-6 m-auto">
            <label className="form-control-placeholder" htmlFor="IncomeWithTax">
              Valor do Bem (R$)
            </label>
            <input
              type="text"
              id="IncomeWithTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-6 m-auto">
            <label className="form-control-placeholder" htmlFor="IncomeWithTax">
              Descrição do Bem
            </label>
            <input
              type="text"
              id="IncomeWithTax"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="col-sm-12 plus-icon">
            <i className="fal fa-minus"></i>Excluir última herança
          </div>

          <div className="col-sm-12 plus-icon">
            <i className="fal fa-plus add_more_incluir"></i>Incluir nova herança
          </div>
        </div>
      </div>
    </>
  );
}
