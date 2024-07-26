// Exercice React / TS #88
import React, { useState, useEffect } from 'react';

export function ExoComponent88() {
  const [compteur, setCompteur] = useState<number>(88);
  useEffect(() => {
    console.log('Composant 88 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #88</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
