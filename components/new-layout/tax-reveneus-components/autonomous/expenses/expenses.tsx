import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { ActionName } from '../../../../../state/store';
import { ReceivedCash } from '../../../../../typing';

interface Args {
  receivedCash: ReceivedCash;
}

export default function AutonomousExpense({ receivedCash }: Args) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="January">
          Janeiro
        </label>
        <input
          type="number"
          id="January"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.january}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  january: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="February">
          Fevereiro
        </label>
        <input
          type="number"
          id="February"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.february}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  february: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="March">
          Março
        </label>
        <input
          type="number"
          id="March"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.march}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  march: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="April">
          Abril
        </label>
        <input
          type="number"
          id="April"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.april}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  april: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="May">
          Maio
        </label>
        <input
          type="number"
          id="May"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.may}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  may: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="June">
          Junho
        </label>
        <input
          type="number"
          id="June"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.june}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  june: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="July">
          Julho
        </label>
        <input
          type="number"
          id="July"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.july}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  july: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="August">
          Agosto
        </label>
        <input
          type="number"
          id="August"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.august}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  august: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="September">
          Setembro
        </label>
        <input
          type="number"
          id="September"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.september}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  september: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="October">
          Outubro
        </label>
        <input
          type="number"
          id="October"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.octuber}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  octuber: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="November">
          Novembro
        </label>
        <input
          type="number"
          id="November"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.november}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  november: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>
      <div className="col-sm-4 m-auto">
        <label className="form-control-placeholder" htmlFor="December">
          Dezembro
        </label>
        <input
          type="number"
          id="December"
          className="form-control"
          placeholder="R$"
          value={receivedCash.income.december}
          onChange={(e) => {
            dispatch({
              type: ActionName.UpdateFreelanceCashReceived,
              payload: {
                uuid: receivedCash.uuid,
                income: {
                  december: parseFloat(e.target.value),
                },
              },
            });
          }}
        />
      </div>

      <div className="col-sm-12 plus-icon">
        <i className="fal fa-minus"></i>{' '}
        <FormattedMessage id="income.navegation.option.freelancer.cash-flow.remove" />
      </div>
    </>
  );
}
