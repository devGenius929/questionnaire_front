import * as React from 'react';
import MaskedInput from '../../../../masked-input';

export default function IncomesCompany() {
  return (
    <>
      <div className="col-sm-12 m-auto">
        <label className="form-control-placeholder" htmlFor="PayingSource">
          Nome da Fonte Pagadora
        </label>
        <input
          type="text"
          id="PayingSource"
          className="form-control"
          placeholder="Nome Fonte Pagadora"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="CNPJ">
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
        <label className="form-control-placeholder" htmlFor="GrossIncome">
          Renda Brutal Anual
        </label>
        <input
          type="text"
          id="GrossIncome"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="tax">
          Imposto Retido
        </label>
        <input type="text" id="tax" className="form-control" placeholder="R$" />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="OficialWelfare">
          Previdencia Oficial
        </label>
        <input
          type="text"
          id="OficialWelfare"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir último recebimento de pessoa jurídica
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo recebimento
        de pessoa jurídica
      </div>
    </>
  );
}
