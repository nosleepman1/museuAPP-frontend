// Exercice React / TS #95
import React, { useState, useEffect } from 'react';

export function ExoComponent95() {
  const [compteur, setCompteur] = useState<number>(95);
  useEffect(() => {
    console.log('Composant 95 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #95</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
