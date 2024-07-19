// Exercice React / TS #83
import React, { useState, useEffect } from 'react';

export function ExoComponent83() {
  const [compteur, setCompteur] = useState<number>(83);
  useEffect(() => {
    console.log('Composant 83 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #83</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
