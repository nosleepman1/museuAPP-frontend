// Exercice React / TS #99
import React, { useState, useEffect } from 'react';

export function ExoComponent99() {
  const [compteur, setCompteur] = useState<number>(99);
  useEffect(() => {
    console.log('Composant 99 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #99</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
