import { InputZipCode } from './components/InputZipCode';

function App() {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center">
        <div className="justify-center">
          <h1 className="font-bold text-2xl pt-16">Informe o CEP</h1>
          <InputZipCode />
        </div>
      </div>
    </>
  );
}

export default App;
