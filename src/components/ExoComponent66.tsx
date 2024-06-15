// Exercice React / TS #66
import React, { useState, useEffect } from 'react';

export function ExoComponent66() {
  const [compteur, setCompteur] = useState<number>(66);
  useEffect(() => {
    console.log('Composant 66 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #66</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
