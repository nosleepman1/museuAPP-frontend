// Exercice React / TS #107
import React, { useState, useEffect } from 'react';

export function ExoComponent107() {
  const [compteur, setCompteur] = useState<number>(107);
  useEffect(() => {
    console.log('Composant 107 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #107</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
