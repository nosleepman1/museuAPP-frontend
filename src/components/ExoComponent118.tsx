// Exercice React / TS #118
import React, { useState, useEffect } from 'react';

export function ExoComponent118() {
  const [compteur, setCompteur] = useState<number>(118);
  useEffect(() => {
    console.log('Composant 118 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #118</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
