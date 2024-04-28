// Exercice React / TS #39
import React, { useState, useEffect } from 'react';

export function ExoComponent39() {
  const [compteur, setCompteur] = useState<number>(39);
  useEffect(() => {
    console.log('Composant 39 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #39</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
