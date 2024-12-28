// Exercice React / TS #160
import React, { useState, useEffect } from 'react';

export function ExoComponent160() {
  const [compteur, setCompteur] = useState<number>(160);
  useEffect(() => {
    console.log('Composant 160 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #160</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
