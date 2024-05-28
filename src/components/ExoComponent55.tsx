// Exercice React / TS #55
import React, { useState, useEffect } from 'react';

export function ExoComponent55() {
  const [compteur, setCompteur] = useState<number>(55);
  useEffect(() => {
    console.log('Composant 55 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #55</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
