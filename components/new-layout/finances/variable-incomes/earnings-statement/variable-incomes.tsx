import * as React from 'react';
import SelectPerson from '../../../../select-person';

export default function VariableIncomes() {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-sm-6 m-auto">
          <label
            className="form-control-placeholder"
            htmlFor="nameReceived"
            title="Quem recebeu?"
          >
            Quem teve o ganho?
          </label>
          <SelectPerson onChange={(person) => console.log(person)} />
        </div>

        <div className="col-sm-6 m-auto"></div>
        <div className="col-sm-12 m-auto">
          <label className="form-control-placeholder" htmlFor="InvestimentType">
            Tipo do Investimento
          </label>
          <select className=" form-control search_select input-edited" required>
            <option value="InvestimentType1">
              Fundo de Investimento Imobiliário
            </option>
            <option value="InvestimentType2">Mercado à Vista - Ações</option>
            <option value="InvestimentType3">Mercado à Vista - Ouro</option>
            <option value="InvestimentType4">Mercado à Vista - Outros</option>
            <option value="InvestimentType5">Mercado Opções - Ações</option>
            <option value="InvestimentType6">Mercado Opções - Ouro</option>
            <option value="InvestimentType7">
              Mercado Opções - Fora de Bolsa
            </option>
            <option value="InvestimentType8">Mercado Opções - Outros</option>
            <option value="InvestimentType9">
              Mercado Futuro - Dólar Americano
            </option>
            <option value="InvestimentType10">Mercado Futuro - Índices</option>
            <option value="InvestimentType11">Mercado Futuro - Juros</option>
            <option value="InvestimentType12">Mercado Futuro - Outros</option>
            <option value="InvestimentType13">
              Mercado a Termo - Ações/Ouro
            </option>
            <option value="InvestimentType14">Mercado a Termo - Outros</option>
          </select>
        </div>

        <div className="col-sm-12 m-auto checkbox-input">
          <input type="checkbox" name="checkbox1" id="checkbox1" />
          <label htmlFor="checkbox1">Selecione se é Day-Trade</label>
        </div>
        <div className="col-sm-6 m-auto">
          <label
            className="form-control-placeholder"
            htmlFor="OptionalDescriptionInvestiment"
          >
            Descrição do investimento
          </label>
          <input
            type="text"
            id="OptionalDescriptionInvestiment"
            className="form-control"
            placeholder="Opcional"
          />
        </div>
        <br />
        <div className="col-sm-6 m-auto">
          <label
            className="form-control-placeholder"
            htmlFor="AcumulatedLossLastYear"
          >
            Prejuízo acumulado ano anterior
          </label>
          <input
            type="text"
            id="AcumulatedLossLastYear"
            className="form-control"
            placeholder="R$"
          />
        </div>
        <>
          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Janeiro
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder">Ganho</label>
            <input
              type="text"
              id="JanuaryGain"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="March">
              Imposto retido
            </label>
            <input
              type="text"
              id="JanuaryHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="JanuaryPaidTax"
            >
              Imposto pago
            </label>
            <input
              type="text"
              id="JanuaryPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Fevereiro
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="February">
              Ganho
            </label>
            <input
              type="text"
              id="FebruaryGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="FebruaryHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="FebruaryHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="FebruaryPaidTax"
            >
              Imposto pago
            </label>
            <input
              type="text"
              id="FebruaryPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Março
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="MarchGains">
              Ganho
            </label>
            <input
              type="text"
              id="MarchGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="MarchHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="MarchHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="MarchPaidTax">
              Imposto pago
            </label>
            <input
              type="text"
              id="MarchPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Abril
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="AprilGains">
              Ganho
            </label>
            <input
              type="text"
              id="AprilGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="AprilHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="AprilHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="AprilPaidTax">
              Imposto pago
            </label>
            <input
              type="text"
              id="AprilPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Maio
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="MayGains">
              Ganho
            </label>
            <input
              type="text"
              id="MayGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="MayHoldingTax">
              Imposto retido
            </label>
            <input
              type="text"
              id="MayHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="MayPaidTax">
              Imposto pago
            </label>
            <input
              type="text"
              id="MayPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Junho
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="JuneGains">
              Ganho
            </label>
            <input
              type="text"
              id="JuneGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="JuneHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="JuneHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="JunePaidTax">
              Imposto pago
            </label>
            <input
              type="text"
              id="JunePaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Julho
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="JulyGains">
              Ganho
            </label>
            <input
              type="text"
              id="JulyGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="JulyHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="JulyHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="JulyPaidTax">
              Imposto pago
            </label>
            <input
              type="text"
              id="JulyPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Agosto
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="AugustGains">
              Ganho
            </label>
            <input
              type="text"
              id="AugustGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="AugustHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="AugustHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="AugustPaidTax">
              Imposto pago
            </label>
            <input
              type="text"
              id="AugustPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Setembro
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="SeptemberGains"
            >
              Ganho
            </label>
            <input
              type="text"
              id="SeptemberGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="SeptemberHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="SeptemberHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="SeptemberPaidTax"
            >
              Imposto pago
            </label>
            <input
              type="text"
              id="SeptemberPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Outubro
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="OctoberGains">
              Ganho
            </label>
            <input
              type="text"
              id="OctoberGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="OctoberHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="OctoberHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="OctoberPaidTax"
            >
              Imposto pago
            </label>
            <input
              type="text"
              id="OctoberPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Novembro
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="NovemberGains">
              Ganho
            </label>
            <input
              type="text"
              id="NovemberGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="NovemberHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="NovemberHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="NovemberPaidTax"
            >
              Imposto pago
            </label>
            <input
              type="text"
              id="NovemberPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>

          <div className="col-sm-4 w-full">
            <p className="form-control-placeholder title-alimony-direct">
              Dezembro
            </p>
          </div>
          <div className="col-sm-4 m-auto">
            <label className="form-control-placeholder" htmlFor="DecemberGains">
              Ganho
            </label>
            <input
              type="text"
              id="DecemberGains"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="DecemberHoldingTax"
            >
              Imposto retido
            </label>
            <input
              type="text"
              id="DecemberHoldingTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
          <div className="col-sm-4 m-auto">
            <label
              className="form-control-placeholder"
              htmlFor="DecemberPaidTax"
            >
              Imposto pago
            </label>
            <input
              type="text"
              id="DecemberPaidTax"
              className="form-control"
              placeholder="R$"
            />
          </div>
        </>

        <div className="col-sm-12 plus-icon">
          <i className="fal fa-minus"></i>
          Excluir último recebimento de pessoa jurídica
        </div>
        <div className="col-sm-12 plus-icon">
          <i className="fal fa-plus add_more_incluir"></i>Incluir novo
          recebimento de pessoa jurídica
        </div>
      </div>
    </div>
  );
}
