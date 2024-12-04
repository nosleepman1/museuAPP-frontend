// Exercice React / TS #149
import React, { useState, useEffect } from 'react';

export function ExoComponent149() {
  const [compteur, setCompteur] = useState<number>(149);
  useEffect(() => {
    console.log('Composant 149 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #149</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
