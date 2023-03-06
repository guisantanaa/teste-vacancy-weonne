interface Props {
  loading: boolean;
  onClick: () => void;
}

export const Button = ({ loading, onClick }: Props) => {
  return (
    <button
      className="bg-orange-500 rounded-lg py-3 mt-4 font-bold hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-[.7] transition"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Carregando...' : 'Buscar'}
    </button>
  );
};
