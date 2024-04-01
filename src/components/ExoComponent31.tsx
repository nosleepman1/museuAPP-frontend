// Exercice React / TS #31
import React, { useState, useEffect } from 'react';

export function ExoComponent31() {
  const [compteur, setCompteur] = useState<number>(31);
  useEffect(() => {
    console.log('Composant 31 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #31</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
