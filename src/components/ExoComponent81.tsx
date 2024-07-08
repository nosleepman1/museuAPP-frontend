// Exercice React / TS #81
import React, { useState, useEffect } from 'react';

export function ExoComponent81() {
  const [compteur, setCompteur] = useState<number>(81);
  useEffect(() => {
    console.log('Composant 81 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #81</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
