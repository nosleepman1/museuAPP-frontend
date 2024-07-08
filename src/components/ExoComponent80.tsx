// Exercice React / TS #80
import React, { useState, useEffect } from 'react';

export function ExoComponent80() {
  const [compteur, setCompteur] = useState<number>(80);
  useEffect(() => {
    console.log('Composant 80 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #80</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
