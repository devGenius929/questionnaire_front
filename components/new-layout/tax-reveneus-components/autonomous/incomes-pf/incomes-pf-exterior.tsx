import * as React from 'react';

export default function IncomesPFExterior() {
  return (
    <>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="January">
          Janeiro
        </label>
        <input
          type="text"
          id="January"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="February">
          Fevereiro
        </label>
        <input
          type="text"
          id="February"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="March">
          Março
        </label>
        <input
          type="text"
          id="March"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="April">
          Abril
        </label>
        <input
          type="text"
          id="April"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="May">
          Maio
        </label>
        <input type="text" id="May" className="form-control" placeholder="R$" />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="June">
          Junho
        </label>
        <input
          type="text"
          id="June"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="July">
          Julho
        </label>
        <input
          type="text"
          id="July"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="August">
          Agosto
        </label>
        <input
          type="text"
          id="August"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="September">
          Setembro
        </label>
        <input
          type="text"
          id="September"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="October">
          Outubro
        </label>
        <input
          type="text"
          id="October"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="November">
          Novembro
        </label>
        <input
          type="text"
          id="November"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="December">
          Dezembro
        </label>
        <input
          type="text"
          id="December"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-12 m-auto checkbox-input">
        <input type="checkbox" name="checkbox1" id="checkbox1" />
        <label htmlFor="checkbox1">
          Selecione se rendimento veio do exterior
        </label>
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>
        Excluir último recebimento de pessoa física
      </div>
      <div className="col-sm-12 plus-icon">
        <i className="fal fa-plus add_more_incluir"></i>Incluir novo recebimento
        de pessoa física
      </div>
    </>
  );
}
