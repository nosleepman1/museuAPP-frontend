// Exercice React / TS #157
import React, { useState, useEffect } from 'react';

export function ExoComponent157() {
  const [compteur, setCompteur] = useState<number>(157);
  useEffect(() => {
    console.log('Composant 157 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #157</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
