// Exercice React / TS #145
import React, { useState, useEffect } from 'react';

export function ExoComponent145() {
  const [compteur, setCompteur] = useState<number>(145);
  useEffect(() => {
    console.log('Composant 145 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #145</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
