// Exercice React / TS #119
import React, { useState, useEffect } from 'react';

export function ExoComponent119() {
  const [compteur, setCompteur] = useState<number>(119);
  useEffect(() => {
    console.log('Composant 119 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #119</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
