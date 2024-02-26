// Exercice React / TS #18
import React, { useState, useEffect } from 'react';

export function ExoComponent18() {
  const [compteur, setCompteur] = useState<number>(18);
  useEffect(() => {
    console.log('Composant 18 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #18</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
