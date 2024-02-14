// Exercice React / TS #11
import React, { useState, useEffect } from 'react';

export function ExoComponent11() {
  const [compteur, setCompteur] = useState<number>(11);
  useEffect(() => {
    console.log('Composant 11 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #11</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
