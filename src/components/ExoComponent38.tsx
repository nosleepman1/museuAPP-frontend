// Exercice React / TS #38
import React, { useState, useEffect } from 'react';

export function ExoComponent38() {
  const [compteur, setCompteur] = useState<number>(38);
  useEffect(() => {
    console.log('Composant 38 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #38</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
