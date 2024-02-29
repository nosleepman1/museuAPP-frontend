// Exercice React / TS #21
import React, { useState, useEffect } from 'react';

export function ExoComponent21() {
  const [compteur, setCompteur] = useState<number>(21);
  useEffect(() => {
    console.log('Composant 21 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #21</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
