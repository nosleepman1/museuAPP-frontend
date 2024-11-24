// Exercice React / TS #142
import React, { useState, useEffect } from 'react';

export function ExoComponent142() {
  const [compteur, setCompteur] = useState<number>(142);
  useEffect(() => {
    console.log('Composant 142 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #142</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
