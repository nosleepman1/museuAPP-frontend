// Exercice React / TS #100
import React, { useState, useEffect } from 'react';

export function ExoComponent100() {
  const [compteur, setCompteur] = useState<number>(100);
  useEffect(() => {
    console.log('Composant 100 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #100</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
