// Exercice React / TS #72
import React, { useState, useEffect } from 'react';

export function ExoComponent72() {
  const [compteur, setCompteur] = useState<number>(72);
  useEffect(() => {
    console.log('Composant 72 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #72</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
