// Exercice React / TS #109
import React, { useState, useEffect } from 'react';

export function ExoComponent109() {
  const [compteur, setCompteur] = useState<number>(109);
  useEffect(() => {
    console.log('Composant 109 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #109</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
