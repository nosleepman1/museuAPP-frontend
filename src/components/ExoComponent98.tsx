// Exercice React / TS #98
import React, { useState, useEffect } from 'react';

export function ExoComponent98() {
  const [compteur, setCompteur] = useState<number>(98);
  useEffect(() => {
    console.log('Composant 98 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #98</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
