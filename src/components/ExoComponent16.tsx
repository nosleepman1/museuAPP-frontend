// Exercice React / TS #16
import React, { useState, useEffect } from 'react';

export function ExoComponent16() {
  const [compteur, setCompteur] = useState<number>(16);
  useEffect(() => {
    console.log('Composant 16 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #16</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
