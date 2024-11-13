// Exercice React / TS #133
import React, { useState, useEffect } from 'react';

export function ExoComponent133() {
  const [compteur, setCompteur] = useState<number>(133);
  useEffect(() => {
    console.log('Composant 133 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #133</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
