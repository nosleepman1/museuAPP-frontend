// Exercice React / TS #122
import React, { useState, useEffect } from 'react';

export function ExoComponent122() {
  const [compteur, setCompteur] = useState<number>(122);
  useEffect(() => {
    console.log('Composant 122 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #122</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
