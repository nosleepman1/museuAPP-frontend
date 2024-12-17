// Exercice React / TS #154
import React, { useState, useEffect } from 'react';

export function ExoComponent154() {
  const [compteur, setCompteur] = useState<number>(154);
  useEffect(() => {
    console.log('Composant 154 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #154</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
