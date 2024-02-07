// Exercice React / TS #8
import React, { useState, useEffect } from 'react';

export function ExoComponent8() {
  const [compteur, setCompteur] = useState<number>(8);
  useEffect(() => {
    console.log('Composant 8 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #8</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
