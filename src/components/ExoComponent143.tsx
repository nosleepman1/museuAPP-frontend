// Exercice React / TS #143
import React, { useState, useEffect } from 'react';

export function ExoComponent143() {
  const [compteur, setCompteur] = useState<number>(143);
  useEffect(() => {
    console.log('Composant 143 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #143</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
