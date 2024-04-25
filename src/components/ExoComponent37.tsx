// Exercice React / TS #37
import React, { useState, useEffect } from 'react';

export function ExoComponent37() {
  const [compteur, setCompteur] = useState<number>(37);
  useEffect(() => {
    console.log('Composant 37 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #37</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
