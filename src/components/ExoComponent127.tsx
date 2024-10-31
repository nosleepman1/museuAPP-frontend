// Exercice React / TS #127
import React, { useState, useEffect } from 'react';

export function ExoComponent127() {
  const [compteur, setCompteur] = useState<number>(127);
  useEffect(() => {
    console.log('Composant 127 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #127</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
