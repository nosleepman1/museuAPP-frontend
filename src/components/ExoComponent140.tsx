// Exercice React / TS #140
import React, { useState, useEffect } from 'react';

export function ExoComponent140() {
  const [compteur, setCompteur] = useState<number>(140);
  useEffect(() => {
    console.log('Composant 140 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #140</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
