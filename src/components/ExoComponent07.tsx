// Exercice React / TS #7
import React, { useState, useEffect } from 'react';

export function ExoComponent7() {
  const [compteur, setCompteur] = useState<number>(7);
  useEffect(() => {
    console.log('Composant 7 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #7</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
