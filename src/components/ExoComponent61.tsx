// Exercice React / TS #61
import React, { useState, useEffect } from 'react';

export function ExoComponent61() {
  const [compteur, setCompteur] = useState<number>(61);
  useEffect(() => {
    console.log('Composant 61 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #61</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
