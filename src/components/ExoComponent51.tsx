// Exercice React / TS #51
import React, { useState, useEffect } from 'react';

export function ExoComponent51() {
  const [compteur, setCompteur] = useState<number>(51);
  useEffect(() => {
    console.log('Composant 51 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #51</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
