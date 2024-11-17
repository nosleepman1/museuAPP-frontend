// Exercice React / TS #137
import React, { useState, useEffect } from 'react';

export function ExoComponent137() {
  const [compteur, setCompteur] = useState<number>(137);
  useEffect(() => {
    console.log('Composant 137 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #137</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
