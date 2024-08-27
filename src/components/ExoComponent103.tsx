// Exercice React / TS #103
import React, { useState, useEffect } from 'react';

export function ExoComponent103() {
  const [compteur, setCompteur] = useState<number>(103);
  useEffect(() => {
    console.log('Composant 103 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #103</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
