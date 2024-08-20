// Exercice React / TS #102
import React, { useState, useEffect } from 'react';

export function ExoComponent102() {
  const [compteur, setCompteur] = useState<number>(102);
  useEffect(() => {
    console.log('Composant 102 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #102</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
