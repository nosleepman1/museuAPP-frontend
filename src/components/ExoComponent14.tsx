// Exercice React / TS #14
import React, { useState, useEffect } from 'react';

export function ExoComponent14() {
  const [compteur, setCompteur] = useState<number>(14);
  useEffect(() => {
    console.log('Composant 14 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #14</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
