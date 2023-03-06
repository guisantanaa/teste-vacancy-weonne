import { Spinner } from './Spinner';

export interface infoZipCodeData {
  cep: number;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: number;
  gia: number;
  ddd: number;
  siafi: number;
}

interface ZipCodeInfo {
  zipCodeData: infoZipCodeData;
  loading: boolean;
}

export const ZipShowData = ({ zipCodeData, loading }: ZipCodeInfo) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="py-6 leading-10">
          <ul>
            <li>CEP: {zipCodeData.cep}</li>
            <li>Logradouro: {zipCodeData.logradouro || 'Não Disponivel'}</li>
            <li>Complemento: {zipCodeData.complemento || 'Não Disponivel'}</li>
            <li>Bairro: {zipCodeData.bairro || 'Não Disponivel'}</li>
            <li>Localidade: {zipCodeData.localidade || 'Não Disponivel'}</li>
            <li>Estado: {zipCodeData.uf || 'Não Disponivel'}</li>
            <li>IBGE: {zipCodeData.ibge || 'Não Disponivel'}</li>
            <li>GIA: {zipCodeData.gia || 'Não Disponivel'}</li>
            <li>DDD: {zipCodeData.ddd || 'Não Disponivel'}</li>
            <li>Siafi: {zipCodeData.siafi || 'Não Disponivel'}</li>
          </ul>
        </div>
      )}
    </>
  );
};
