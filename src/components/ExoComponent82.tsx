// Exercice React / TS #82
import React, { useState, useEffect } from 'react';

export function ExoComponent82() {
  const [compteur, setCompteur] = useState<number>(82);
  useEffect(() => {
    console.log('Composant 82 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #82</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
