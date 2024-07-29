// Exercice React / TS #90
import React, { useState, useEffect } from 'react';

export function ExoComponent90() {
  const [compteur, setCompteur] = useState<number>(90);
  useEffect(() => {
    console.log('Composant 90 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #90</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
