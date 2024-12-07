// Exercice React / TS #151
import React, { useState, useEffect } from 'react';

export function ExoComponent151() {
  const [compteur, setCompteur] = useState<number>(151);
  useEffect(() => {
    console.log('Composant 151 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #151</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
