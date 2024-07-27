// Exercice React / TS #89
import React, { useState, useEffect } from 'react';

export function ExoComponent89() {
  const [compteur, setCompteur] = useState<number>(89);
  useEffect(() => {
    console.log('Composant 89 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #89</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
