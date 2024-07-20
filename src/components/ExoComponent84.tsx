// Exercice React / TS #84
import React, { useState, useEffect } from 'react';

export function ExoComponent84() {
  const [compteur, setCompteur] = useState<number>(84);
  useEffect(() => {
    console.log('Composant 84 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #84</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
