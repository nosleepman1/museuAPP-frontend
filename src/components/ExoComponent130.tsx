// Exercice React / TS #130
import React, { useState, useEffect } from 'react';

export function ExoComponent130() {
  const [compteur, setCompteur] = useState<number>(130);
  useEffect(() => {
    console.log('Composant 130 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #130</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
