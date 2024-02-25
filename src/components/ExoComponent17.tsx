// Exercice React / TS #17
import React, { useState, useEffect } from 'react';

export function ExoComponent17() {
  const [compteur, setCompteur] = useState<number>(17);
  useEffect(() => {
    console.log('Composant 17 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #17</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
