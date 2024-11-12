// Exercice React / TS #132
import React, { useState, useEffect } from 'react';

export function ExoComponent132() {
  const [compteur, setCompteur] = useState<number>(132);
  useEffect(() => {
    console.log('Composant 132 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #132</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
