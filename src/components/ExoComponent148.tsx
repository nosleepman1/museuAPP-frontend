// Exercice React / TS #148
import React, { useState, useEffect } from 'react';

export function ExoComponent148() {
  const [compteur, setCompteur] = useState<number>(148);
  useEffect(() => {
    console.log('Composant 148 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #148</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
