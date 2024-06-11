// Exercice React / TS #64
import React, { useState, useEffect } from 'react';

export function ExoComponent64() {
  const [compteur, setCompteur] = useState<number>(64);
  useEffect(() => {
    console.log('Composant 64 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #64</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
