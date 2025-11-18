import useLocalStorage from './useLocalStorage';

function UserName() {
  const [nom, setNom] = useLocalStorage('nom', '');

  return (
    <div>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Votre nom"
      />
      <p>Bonjour {nom}</p>
    </div>
  );
}

export default UserName;
