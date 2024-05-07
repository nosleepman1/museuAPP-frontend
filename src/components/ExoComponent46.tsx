// Exercice React / TS #46
import React, { useState, useEffect } from 'react';

export function ExoComponent46() {
  const [compteur, setCompteur] = useState<number>(46);
  useEffect(() => {
    console.log('Composant 46 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #46</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
