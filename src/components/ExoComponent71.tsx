// Exercice React / TS #71
import React, { useState, useEffect } from 'react';

export function ExoComponent71() {
  const [compteur, setCompteur] = useState<number>(71);
  useEffect(() => {
    console.log('Composant 71 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #71</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
