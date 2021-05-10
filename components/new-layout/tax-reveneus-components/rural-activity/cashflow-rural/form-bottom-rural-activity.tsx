import * as React from 'react';
import SelectCountry from '../../../core-layout/select-country';

export default function FormBottomRuralActivity() {
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="January">
          País
        </label>
        <SelectCountry onChange={(o) => {}} />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="January">
          Conv. USD-Moeda
        </label>
        <input
          type="text"
          id="January"
          className="form-control"
          placeholder="R$"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="January">
          Adiant. em 2020
        </label>
        <input
          type="text"
          id="January"
          className="form-control"
          placeholder="R$"
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="January">
          Adiant. até 2011
        </label>
        <input
          type="text"
          id="January"
          className="form-control"
          placeholder="R$"
        />
      </div>
    </>
  );
}
