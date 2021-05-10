import * as React from 'react';
import MaskedInput from '../../../masked-input';

export default function RescueSocialSecurity() {
  return (
    <>
      <div className="col-sm-12 m-auto">
        <label className="form-control-placeholder" htmlFor="RescueType">
          Tipo do Resgate*
        </label>
        <select className=" form-control search_select input-edited" required>
          <option value="">
            Resgate com tabela progressiva (COM impacto no imposto anual) -
            PGBL/VGBL/Previdência/Seguro de Vida
          </option>
          <option value="">
            Resgate com tabela regressiva (SEM impacto no imposto anual) -
            PGBL/VGBL/Previdência/Seguro de Vida
          </option>
        </select>
      </div>

      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="PayingSourceSocialSecurity"
        >
          Nome da Fonte Pagadora
        </label>
        <input
          type="text"
          id="PayingSourceSocialSecurity"
          className="form-control"
          placeholder="Nome da Fonte Pagadora"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="CNPJRescueSocialSecurity"
        >
          CNPJ*
        </label>
        <MaskedInput
          id="CNPJRescueSocialSecurity"
          mask="99.999.999/9999-99"
          name="CNPJRescueSocialSecurity"
          className="form-control"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="Rescued">
          Resgate/Ganho
        </label>
        <input
          type="text"
          id="Rescued"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="TaxSocialSecurity">
          Imposto Retido
        </label>
        <input
          type="text"
          id="TaxSocialSecurity"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir último resgate de previdencia
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo resgate de
        previdencia
      </div>
    </>
  );
}
