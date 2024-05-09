// Exercice React / TS #49
import React, { useState, useEffect } from 'react';

export function ExoComponent49() {
  const [compteur, setCompteur] = useState<number>(49);
  useEffect(() => {
    console.log('Composant 49 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #49</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
