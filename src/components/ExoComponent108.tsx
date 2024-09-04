// Exercice React / TS #108
import React, { useState, useEffect } from 'react';

export function ExoComponent108() {
  const [compteur, setCompteur] = useState<number>(108);
  useEffect(() => {
    console.log('Composant 108 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #108</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
