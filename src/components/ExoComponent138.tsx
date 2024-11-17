// Exercice React / TS #138
import React, { useState, useEffect } from 'react';

export function ExoComponent138() {
  const [compteur, setCompteur] = useState<number>(138);
  useEffect(() => {
    console.log('Composant 138 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #138</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
