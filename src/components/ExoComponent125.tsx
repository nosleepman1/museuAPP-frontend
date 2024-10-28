// Exercice React / TS #125
import React, { useState, useEffect } from 'react';

export function ExoComponent125() {
  const [compteur, setCompteur] = useState<number>(125);
  useEffect(() => {
    console.log('Composant 125 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #125</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
