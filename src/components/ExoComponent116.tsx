// Exercice React / TS #116
import React, { useState, useEffect } from 'react';

export function ExoComponent116() {
  const [compteur, setCompteur] = useState<number>(116);
  useEffect(() => {
    console.log('Composant 116 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #116</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
