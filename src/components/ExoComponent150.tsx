// Exercice React / TS #150
import React, { useState, useEffect } from 'react';

export function ExoComponent150() {
  const [compteur, setCompteur] = useState<number>(150);
  useEffect(() => {
    console.log('Composant 150 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #150</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
