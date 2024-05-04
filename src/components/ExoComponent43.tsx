// Exercice React / TS #43
import React, { useState, useEffect } from 'react';

export function ExoComponent43() {
  const [compteur, setCompteur] = useState<number>(43);
  useEffect(() => {
    console.log('Composant 43 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #43</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
