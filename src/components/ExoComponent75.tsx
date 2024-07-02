// Exercice React / TS #75
import React, { useState, useEffect } from 'react';

export function ExoComponent75() {
  const [compteur, setCompteur] = useState<number>(75);
  useEffect(() => {
    console.log('Composant 75 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #75</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
