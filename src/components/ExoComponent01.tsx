// Exercice React / TS #1
import React, { useState, useEffect } from 'react';

export function ExoComponent1() {
  const [compteur, setCompteur] = useState<number>(1);
  useEffect(() => {
    console.log('Composant 1 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #1</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
