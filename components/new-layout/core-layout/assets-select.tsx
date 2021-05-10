import * as React from 'react';

export default function SelectAssets() {
  return (
    <>
      <label className="form-control-placeholder" htmlFor="">
        Codigo do Bem
      </label>
      <select className=" form-control search_select input-edited" required>
        <option value="6323">Prédio residencial.</option>
        <option value="6324">Prédio comercial.</option>
        <option value="6325">Galpão.</option>
        <option value="6326">Apartamento.</option>
        <option value="6327">Casa.</option>
        <option value="6328">Terreno.</option>
        <option value="6329">Terra nua.</option>
        <option value="6330">Sala ou conjunto.</option>
        <option value="6331">Construção.</option>
        <option value="6332">Benfeitorias.</option>
        <option value="6333">Loja.</option>
        <option value="6334">Outros bens imóveis.</option>
        <option value="8104">Quotas ou quinhões de capital.</option>
        <option value="8105">Outras participações societárias.</option>
        <option value="8106">
          Veículo automotor terrestre:caminhão,autómovel,moto etc.
        </option>
        <option value="8107">Aeronave.</option>
        <option value="8108">Embarcação.</option>
        <option value="8109">
          Bem relacionado com o exercício da atividade autônoma.
        </option>
        <option value="8110">
          Jóia,quadro,objeto de arte,de coleção,antiguidade etc.
        </option>
        <option value="8111">Linha telefônica.</option>
        <option value="8112">Outros bens móveis.</option>
        <option value="8113">Licença e concessão especiais.</option>
        <option value="8114">Título de clube e assemelhado.</option>
        <option value="8115">Direito de autor, de inventor e patente.</option>
        <option value="8116">Direito de lavra e assemelhado.</option>
        <option value="8117">Consórcio não contemplado.</option>
        <option value="8118">Leasing.</option>
        <option value="8119">Outros bens e direitos.</option>
      </select>
    </>
  );
}
