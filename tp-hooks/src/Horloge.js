import { useState, useEffect } from 'react';

function Horloge() {
  const [maintenant, setMaintenant] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setMaintenant(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <p>
      Heure actuelle : {maintenant.toLocaleTimeString()} <br />
      Date : {maintenant.toLocaleDateString()}
    </p>
  );
}

export default Horloge;
