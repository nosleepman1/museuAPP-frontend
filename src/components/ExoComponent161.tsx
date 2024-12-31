// Exercice React / TS #161
import React, { useState, useEffect } from 'react';

export function ExoComponent161() {
  const [compteur, setCompteur] = useState<number>(161);
  useEffect(() => {
    console.log('Composant 161 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #161</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
