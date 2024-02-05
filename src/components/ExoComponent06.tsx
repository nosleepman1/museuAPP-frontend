// Exercice React / TS #6
import React, { useState, useEffect } from 'react';

export function ExoComponent6() {
  const [compteur, setCompteur] = useState<number>(6);
  useEffect(() => {
    console.log('Composant 6 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #6</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
