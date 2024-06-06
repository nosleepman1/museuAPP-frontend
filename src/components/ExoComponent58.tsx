// Exercice React / TS #58
import React, { useState, useEffect } from 'react';

export function ExoComponent58() {
  const [compteur, setCompteur] = useState<number>(58);
  useEffect(() => {
    console.log('Composant 58 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #58</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
