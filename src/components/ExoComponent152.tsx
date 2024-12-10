// Exercice React / TS #152
import React, { useState, useEffect } from 'react';

export function ExoComponent152() {
  const [compteur, setCompteur] = useState<number>(152);
  useEffect(() => {
    console.log('Composant 152 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #152</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
