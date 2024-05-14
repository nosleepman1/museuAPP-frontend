// Exercice React / TS #52
import React, { useState, useEffect } from 'react';

export function ExoComponent52() {
  const [compteur, setCompteur] = useState<number>(52);
  useEffect(() => {
    console.log('Composant 52 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #52</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
