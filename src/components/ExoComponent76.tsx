// Exercice React / TS #76
import React, { useState, useEffect } from 'react';

export function ExoComponent76() {
  const [compteur, setCompteur] = useState<number>(76);
  useEffect(() => {
    console.log('Composant 76 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #76</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
