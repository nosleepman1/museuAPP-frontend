// Exercice React / TS #30
import React, { useState, useEffect } from 'react';

export function ExoComponent30() {
  const [compteur, setCompteur] = useState<number>(30);
  useEffect(() => {
    console.log('Composant 30 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #30</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
