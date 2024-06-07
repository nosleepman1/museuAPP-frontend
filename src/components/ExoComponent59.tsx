// Exercice React / TS #59
import React, { useState, useEffect } from 'react';

export function ExoComponent59() {
  const [compteur, setCompteur] = useState<number>(59);
  useEffect(() => {
    console.log('Composant 59 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #59</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
