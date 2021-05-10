import * as React from 'react';

export default function InteriorSeveralIncomes() {
  return (
    <>
      <div className="col-sm-12 m-auto">
        <label className="form-control-placeholder" htmlFor="TypeIncome">
          Tipo do Rendimento
        </label>
        <select className=" form-control search_select input-edited" required>
          <option value="8128">
            Capital de apólice, pecúlio ou prêmio pago por morte ou invalidez
          </option>
          <option value="8127">Bolsa de estudo ou pesquisa</option>
          <option value="8145">Venda de férias (abono)</option>
          <option value="8132">Resgate de FGTS</option>
          <option value="8133">
            Indenização por rescisão de contrato de trabalho
          </option>
          <option value="8134">Indenização por acidente de trabalho</option>
          <option value="8135">
            Pagamento de empresa pública de Programa de Desligamento Voluntário
          </option>
          <option value="8136">
            IR ganho na justiça referente a anos anteriores
          </option>
          <option value="8137">
            Indenização de seguradora em função de furto, roubo ou acidente
          </option>
          <option value="8138">
            Seguro-desemprego pago pela Previdência Oficial ou Privada
          </option>
          <option value="8139">
            Auxílio-natalidade pago pela Previdência Oficial ou Privada
          </option>
          <option value="8140">
            Auxílio-doença pago pela Previdência Oficial ou Privada
          </option>
          <option value="8141">
            Auxílio-funeral pago pela Previdência Oficial ou Privada
          </option>
          <option value="8142">
            Auxílio-acidente pago pela Previdência Oficial ou Privada
          </option>
          <option value="8143">
            Ganho em sorteio com prêmio em dinheiro ou bem
          </option>
          <option value="8144">Lucro sobre empréstimo para empresa</option>
        </select>
      </div>

      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="DescriptionIncome">
          Descrição do rendimento
        </label>
        <input
          type="text"
          id="February"
          className="form-control"
          placeholder="Descrição do Rendimento"
        />
      </div>
      <div className="col-sm-6 m-auto">
        <label className="form-control-placeholder" htmlFor="Income">
          Rendimento
        </label>
        <input
          type="text"
          id="Income"
          className="form-control"
          placeholder="R$"
        />
      </div>
    </>
  );
}
