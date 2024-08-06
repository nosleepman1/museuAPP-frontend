// Exercice React / TS #96
import React, { useState, useEffect } from 'react';

export function ExoComponent96() {
  const [compteur, setCompteur] = useState<number>(96);
  useEffect(() => {
    console.log('Composant 96 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #96</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
