// Exercice React / TS #24
import React, { useState, useEffect } from 'react';

export function ExoComponent24() {
  const [compteur, setCompteur] = useState<number>(24);
  useEffect(() => {
    console.log('Composant 24 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #24</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
