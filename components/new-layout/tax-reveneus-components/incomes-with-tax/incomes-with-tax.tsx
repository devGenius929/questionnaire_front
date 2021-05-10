import * as React from 'react';
import MaskedInput from '../../../masked-input';

export default function IncomeWithTax() {
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="NameSourcePayingIncomesWithTax"
        >
          Nome Fonte Pagadora*
        </label>
        <input
          type="text"
          id="NameSourcePayingIncomesWithTax"
          className="form-control"
          placeholder="Nome Fonte Pagadora"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="CNPJIncomesWithTax"
        >
          CNPJ*
        </label>
        <MaskedInput
          id="CNPJ"
          mask="99.999.999/9999-99"
          name="CNPJIncomesWithTax"
          className="form-control"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="IncomeWithTax">
          Rendimento
        </label>
        <input
          type="text"
          id="IncomeWithTax"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="JudicialDeposit">
          Deposito Judicial IR
        </label>
        <input
          type="text"
          id="JudicialDeposit"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir último rendimento
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo rendimento
      </div>
    </>
  );
}
