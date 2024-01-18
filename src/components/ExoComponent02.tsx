// Exercice React / TS #2
import React, { useState, useEffect } from 'react';

export function ExoComponent2() {
  const [compteur, setCompteur] = useState<number>(2);
  useEffect(() => {
    console.log('Composant 2 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #2</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
