// Exercice React / TS #144
import React, { useState, useEffect } from 'react';

export function ExoComponent144() {
  const [compteur, setCompteur] = useState<number>(144);
  useEffect(() => {
    console.log('Composant 144 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #144</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
