// Exercice React / TS #13
import React, { useState, useEffect } from 'react';

export function ExoComponent13() {
  const [compteur, setCompteur] = useState<number>(13);
  useEffect(() => {
    console.log('Composant 13 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #13</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
