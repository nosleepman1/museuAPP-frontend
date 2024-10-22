// Exercice React / TS #117
import React, { useState, useEffect } from 'react';

export function ExoComponent117() {
  const [compteur, setCompteur] = useState<number>(117);
  useEffect(() => {
    console.log('Composant 117 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #117</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
