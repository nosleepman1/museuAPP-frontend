// Exercice React / TS #134
import React, { useState, useEffect } from 'react';

export function ExoComponent134() {
  const [compteur, setCompteur] = useState<number>(134);
  useEffect(() => {
    console.log('Composant 134 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #134</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
