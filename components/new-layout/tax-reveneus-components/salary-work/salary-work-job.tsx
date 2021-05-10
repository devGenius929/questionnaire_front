import * as React from 'react';
import SelectPerson from '../../../select-person';
import MaskedInput from '../../../masked-input';
import { useSelector, useDispatch } from 'react-redux';
import { ActionName } from '../../../../state/store';

interface Params {
  index: number;
}

export default function SalaryWorkJob({ index }: Params) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-sm-6 m-auto">
        <label
          className="form-control-placeholder"
          htmlFor="nameReceived"
          title="Quem recebeu?"
        >
          Quem recebeu?
        </label>
        <SelectPerson
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).personUuid
          }
          onChange={(person) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  personUuid: person.uuid,
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-6 m-auto"></div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="nameEmployer">
          Nome do Empregador
        </label>
        <input
          type="text"
          id="nameEmployer"
          className="form-control"
          placeholder="Nome Empregador"
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).name
          }
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  employerName: e.target.value,
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="name">
          CNPJ/CPF*
        </label>
        <MaskedInput
          id="CNPJCPF"
          mask="99.999.999/9999-99"
          name="CNPJCPF"
          className="form-control"
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).cpfCnPJ
          }
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  cpfCnPJ: e.target.value,
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="name">
          Renda Bruta Anual
        </label>
        <input
          type="text"
          id="name5"
          className="form-control"
          placeholder="R$"
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).annualGrossIncome
          }
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  annualGrossIncome: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="name">
          Previdência Social
        </label>
        <input
          type="text"
          id="name6"
          className="form-control"
          placeholder="R$"
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).officialPension
          }
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  officialPension: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="name">
          Imposto Retido
        </label>
        <input
          type="text"
          id="name6"
          className="form-control"
          placeholder="R$"
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).tax
          }
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  tax: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="name">
          Décimo Terceiro
        </label>
        <input
          type="text"
          id="name6"
          className="form-control"
          placeholder="R$"
          value={
            useSelector(
              (state) => state.declaration.incomes.salaryWork.jobs[index],
            ).extraSalary
          }
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateSalaryWorkJob,
              payload: {
                index,
                job: {
                  extraSalary: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div
        className="col-sm-12 plus-icon"
        onClick={() =>
          dispatch({
            type: ActionName.RemoveSalaryWorkJob,
            payload: {},
          })
        }
      >
        <i className="fal fa-minus"></i>
        Excluir último recebimento de pessoa jurídica
      </div>
    </>
  );
}
