import * as React from 'react';
import MaskedInput from '../../../masked-input';

export default function Retirement() {
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="PayingSource">
          Fonte Pagadora*
        </label>
        <input
          type="text"
          id="PayingSource"
          className="form-control"
          placeholder="Fonte Pagadora"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="CNPJRetirement">
          CNPJ*
        </label>
        <MaskedInput
          id="CNPJRetirement"
          mask="99.999.999/9999-99"
          name="CNPJRetirement"
          className="form-control"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="TaxableIncome">
          Renda Tributável
        </label>
        <input
          type="text"
          id="TaxableIncome"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="ExemptPart">
          Parte Isenta 65 anos
        </label>
        <input
          type="text"
          id="ExemptPart"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="TaxRetirement">
          Imposto Retido
        </label>
        <input
          type="text"
          id="TaxRetirement"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="AnualPension">
          Décimo Terceiro
        </label>
        <input
          type="text"
          id="AnualPension"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="OfficialWelfare">
          Previdencia Oficial
        </label>
        <input
          type="text"
          id="OfficialWelfare"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto"></div>

      <div className="col-sm-12 m-auto checkbox-input">
        <input type="checkbox" name="checkbox1" id="checkbox1" />
        <label htmlFor="checkbox1">
          Selecione se há isenção integral por doença grave
        </label>
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir última aposentadoria
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir nova
        aposentadoria
      </div>
    </>
  );
}
