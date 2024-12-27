// Exercice React / TS #158
import React, { useState, useEffect } from 'react';

export function ExoComponent158() {
  const [compteur, setCompteur] = useState<number>(158);
  useEffect(() => {
    console.log('Composant 158 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #158</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
