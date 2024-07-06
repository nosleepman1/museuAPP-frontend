// Exercice React / TS #78
import React, { useState, useEffect } from 'react';

export function ExoComponent78() {
  const [compteur, setCompteur] = useState<number>(78);
  useEffect(() => {
    console.log('Composant 78 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #78</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
