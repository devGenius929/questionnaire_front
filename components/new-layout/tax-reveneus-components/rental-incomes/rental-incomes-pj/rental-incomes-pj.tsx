import * as React from 'react';
import MaskedInput from '../../../../masked-input';

export default function RentalIncomesPJ() {
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="RenterName">
          Nome do locatário*
        </label>
        <input
          type="text"
          id="RenterName"
          className="form-control"
          placeholder="Nome do Locatário"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="CNPJRenter">
          CNPJ*
        </label>
        <MaskedInput
          id="CNPJRenter"
          mask="99.999.999/9999-99"
          name="CNPJRenter"
          className="form-control"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="RentIncome">
          Renda
        </label>
        <input
          type="text"
          id="RentIncome"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="TaxRental">
          Imposto Retido
        </label>
        <input
          type="text"
          id="TaxRental"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-12 m-auto checkbox-input">
        <input type="checkbox" name="checkbox1" id="checkbox1" />
        <label htmlFor="checkbox1">
          Selecione se o aluguel é de bem comum do casal
        </label>
      </div>

      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir último recebimento de empresa
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo recebimento
        de empresa
      </div>
    </>
  );
}
