// Exercice React / TS #87
import React, { useState, useEffect } from 'react';

export function ExoComponent87() {
  const [compteur, setCompteur] = useState<number>(87);
  useEffect(() => {
    console.log('Composant 87 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #87</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
