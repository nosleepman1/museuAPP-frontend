// Exercice React / TS #141
import React, { useState, useEffect } from 'react';

export function ExoComponent141() {
  const [compteur, setCompteur] = useState<number>(141);
  useEffect(() => {
    console.log('Composant 141 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #141</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
