// Exercice React / TS #156
import React, { useState, useEffect } from 'react';

export function ExoComponent156() {
  const [compteur, setCompteur] = useState<number>(156);
  useEffect(() => {
    console.log('Composant 156 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #156</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
