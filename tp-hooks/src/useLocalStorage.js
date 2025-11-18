import { useState, useEffect } from 'react';

function useLocalStorage(key, valeurInitiale) {
  // Lire localStorage au démarrage
  const [valeur, setValeur] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : valeurInitiale;
  });

  // Sauvegarde dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valeur));
  }, [key, valeur]);

  return [valeur, setValeur];
}

export default useLocalStorage;
