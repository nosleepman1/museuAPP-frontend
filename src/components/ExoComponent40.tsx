// Exercice React / TS #40
import React, { useState, useEffect } from 'react';

export function ExoComponent40() {
  const [compteur, setCompteur] = useState<number>(40);
  useEffect(() => {
    console.log('Composant 40 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #40</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
