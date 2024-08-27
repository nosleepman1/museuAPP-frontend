// Exercice React / TS #104
import React, { useState, useEffect } from 'react';

export function ExoComponent104() {
  const [compteur, setCompteur] = useState<number>(104);
  useEffect(() => {
    console.log('Composant 104 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #104</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
