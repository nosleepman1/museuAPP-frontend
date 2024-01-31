// Exercice React / TS #4
import React, { useState, useEffect } from 'react';

export function ExoComponent4() {
  const [compteur, setCompteur] = useState<number>(4);
  useEffect(() => {
    console.log('Composant 4 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #4</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
