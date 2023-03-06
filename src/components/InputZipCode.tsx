import { Button } from './Button';
import { useState } from 'react';
import { infoZipCodeData, ZipShowData } from './ZipShowData';

export const InputZipCode = () => {
  const [zipCode, setZipCode] = useState('');
  const [zipCodeData, setZipCodeData] = useState<infoZipCodeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCodeData(null);

    let { value: cep } = event.target;
    let re = /^([0-9]{2})([0-9]{3})([0-9]{3})/;
    cep = cep.replace(re, '$1$2-$3');
    setZipCode(cep);
  };

  const handleSearchClick = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);

      const data = await response.json();

      setZipCodeData({
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
        ibge: data.ibge,
        gia: data.gia,
        ddd: data.ddd,
        siafi: data.siafi,
      });
    } catch (error) {
      setError('Erro ao buscar o CEP. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4 py-4 grid">
      <input
        className="p-3 rounded-lg"
        placeholder="xxxxx-xxx"
        value={zipCode}
        onChange={handleZipCodeChange}
      />

      <Button loading={loading} onClick={handleSearchClick} />
      {error && <p className="text-red-600 py-3">{error}</p>}
      {zipCodeData && (
        <ZipShowData loading={loading} zipCodeData={zipCodeData} />
      )}
    </div>
  );
};
