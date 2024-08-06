// Exercice React / TS #97
import React, { useState, useEffect } from 'react';

export function ExoComponent97() {
  const [compteur, setCompteur] = useState<number>(97);
  useEffect(() => {
    console.log('Composant 97 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #97</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
