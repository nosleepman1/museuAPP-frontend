// Exercice React / TS #129
import React, { useState, useEffect } from 'react';

export function ExoComponent129() {
  const [compteur, setCompteur] = useState<number>(129);
  useEffect(() => {
    console.log('Composant 129 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #129</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
