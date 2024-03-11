// Exercice React / TS #28
import React, { useState, useEffect } from 'react';

export function ExoComponent28() {
  const [compteur, setCompteur] = useState<number>(28);
  useEffect(() => {
    console.log('Composant 28 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #28</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
