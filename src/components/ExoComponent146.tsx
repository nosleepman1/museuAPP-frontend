// Exercice React / TS #146
import React, { useState, useEffect } from 'react';

export function ExoComponent146() {
  const [compteur, setCompteur] = useState<number>(146);
  useEffect(() => {
    console.log('Composant 146 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #146</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
