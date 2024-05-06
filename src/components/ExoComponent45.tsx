// Exercice React / TS #45
import React, { useState, useEffect } from 'react';

export function ExoComponent45() {
  const [compteur, setCompteur] = useState<number>(45);
  useEffect(() => {
    console.log('Composant 45 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #45</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
