// Exercice React / TS #110
import React, { useState, useEffect } from 'react';

export function ExoComponent110() {
  const [compteur, setCompteur] = useState<number>(110);
  useEffect(() => {
    console.log('Composant 110 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #110</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
