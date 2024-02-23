// Exercice React / TS #15
import React, { useState, useEffect } from 'react';

export function ExoComponent15() {
  const [compteur, setCompteur] = useState<number>(15);
  useEffect(() => {
    console.log('Composant 15 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #15</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
