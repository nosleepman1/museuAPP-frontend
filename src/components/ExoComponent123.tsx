// Exercice React / TS #123
import React, { useState, useEffect } from 'react';

export function ExoComponent123() {
  const [compteur, setCompteur] = useState<number>(123);
  useEffect(() => {
    console.log('Composant 123 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #123</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
