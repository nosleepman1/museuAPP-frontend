// Exercice React / TS #60
import React, { useState, useEffect } from 'react';

export function ExoComponent60() {
  const [compteur, setCompteur] = useState<number>(60);
  useEffect(() => {
    console.log('Composant 60 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #60</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
