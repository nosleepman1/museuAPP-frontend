// Exercice React / TS #54
import React, { useState, useEffect } from 'react';

export function ExoComponent54() {
  const [compteur, setCompteur] = useState<number>(54);
  useEffect(() => {
    console.log('Composant 54 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #54</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
