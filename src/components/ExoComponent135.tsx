// Exercice React / TS #135
import React, { useState, useEffect } from 'react';

export function ExoComponent135() {
  const [compteur, setCompteur] = useState<number>(135);
  useEffect(() => {
    console.log('Composant 135 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #135</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
