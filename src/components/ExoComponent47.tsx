// Exercice React / TS #47
import React, { useState, useEffect } from 'react';

export function ExoComponent47() {
  const [compteur, setCompteur] = useState<number>(47);
  useEffect(() => {
    console.log('Composant 47 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #47</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
