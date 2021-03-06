import * as React from 'react';
import SelectPerson from '../../../select-person';
import MaskedInput from '../../../masked-input';

export default function Alimony() {
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="NameSourcePayingAccumulatedIncomes"
        >
          Nome Fonte Pagadora
        </label>
        <input
          type="text"
          id="NameSourcePayingAccumulatedIncomes"
          className="form-control"
          placeholder="Nome Fonte Pagadora"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="CNPJAccumulatedIncomes"
        >
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
        <label className="form-control-placeholder" htmlFor="IncomeAccumulated">
          Rendimento
        </label>
        <input
          type="text"
          id="IncomeAccumulated"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="OficialPension">
          PrevidĂȘncia Oficial
        </label>
        <input
          type="text"
          id="OficialPension"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="TaxAccumulated">
          Imposto Retido
        </label>
        <input
          type="text"
          id="TaxAccumulated"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="AlimonyAcumulated">
          PensĂŁo AlimentĂ­cia
        </label>
        <input
          type="text"
          id="AlimonyAcumulated"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="ReceivedPension">
          Quem Recebeu a pensĂŁo?
        </label>
        <SelectPerson onChange={(person) => console.log(person)} />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="DateReceived">
          Data do Recebimento
        </label>
        <input
          type="date"
          id="DateReceived"
          className="form-control"
          placeholder="Data do Recebimento"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="MonthsAccumulation"
        >
          Meses de AcumulaĂ§ĂŁo
        </label>
        <input
          type="text"
          id="MonthsAccumulation"
          className="form-control"
          placeholder="Meses de AcumulaĂ§ĂŁo"
        />
      </div>
      <div className="col-sm-6 m-auto"></div>

      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir Ășltimo recebimento de pessoa jurĂ­dica
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo recebimento
        de pessoa jurĂ­dica
      </div>
    </>
  );
}
