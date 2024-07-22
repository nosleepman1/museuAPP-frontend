// Exercice React / TS #86
import React, { useState, useEffect } from 'react';

export function ExoComponent86() {
  const [compteur, setCompteur] = useState<number>(86);
  useEffect(() => {
    console.log('Composant 86 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #86</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
