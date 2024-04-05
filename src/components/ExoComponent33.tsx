// Exercice React / TS #33
import React, { useState, useEffect } from 'react';

export function ExoComponent33() {
  const [compteur, setCompteur] = useState<number>(33);
  useEffect(() => {
    console.log('Composant 33 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #33</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
