// Exercice React / TS #32
import React, { useState, useEffect } from 'react';

export function ExoComponent32() {
  const [compteur, setCompteur] = useState<number>(32);
  useEffect(() => {
    console.log('Composant 32 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #32</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
