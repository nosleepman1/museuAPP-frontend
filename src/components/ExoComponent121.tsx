// Exercice React / TS #121
import React, { useState, useEffect } from 'react';

export function ExoComponent121() {
  const [compteur, setCompteur] = useState<number>(121);
  useEffect(() => {
    console.log('Composant 121 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #121</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
