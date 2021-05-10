import * as React from 'react';
import MaskedInput from '../../../masked-input';

export default function OwnCompany() {
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="NameCompany">
          Nome da Empresa*
        </label>
        <input
          type="text"
          id="NameCompany"
          className="form-control"
          placeholder="Nome da Empresa"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="CNPJCompany">
          CNPJ*
        </label>
        <MaskedInput
          id="CNPJ"
          mask="99.999.999/9999-99"
          name="CNPJ"
          className="form-control"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="ProLaboreAnual">
          Pro-labore Anual
        </label>
        <input
          type="text"
          id="ProLaboreAnual"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="OficalPension">
          Previdencia Oficial
        </label>
        <input
          type="text"
          id="OficalPension"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="TaxCompany">
          Imposto Retido
        </label>
        <input
          type="text"
          id="TaxCompany"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="DividendsCompany">
          Dividendos
        </label>
        <input
          type="text"
          id="DividendsCompany"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-12 m-auto checkbox-input">
        <input type="checkbox" name="checkbox1" id="checkbox1" />
        <label htmlFor="checkbox1">
          Selecione se microempresa ou optante do Simples
        </label>
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir último recebimento de empresa própria
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo recebimento
        de empresa própria
      </div>
    </>
  );
}
