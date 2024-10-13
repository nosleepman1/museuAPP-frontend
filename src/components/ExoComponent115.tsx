// Exercice React / TS #115
import React, { useState, useEffect } from 'react';

export function ExoComponent115() {
  const [compteur, setCompteur] = useState<number>(115);
  useEffect(() => {
    console.log('Composant 115 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #115</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
