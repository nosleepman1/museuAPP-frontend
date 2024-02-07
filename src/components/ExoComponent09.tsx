// Exercice React / TS #9
import React, { useState, useEffect } from 'react';

export function ExoComponent9() {
  const [compteur, setCompteur] = useState<number>(9);
  useEffect(() => {
    console.log('Composant 9 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #9</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
