// Exercice React / TS #113
import React, { useState, useEffect } from 'react';

export function ExoComponent113() {
  const [compteur, setCompteur] = useState<number>(113);
  useEffect(() => {
    console.log('Composant 113 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #113</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
