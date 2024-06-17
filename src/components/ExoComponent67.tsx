// Exercice React / TS #67
import React, { useState, useEffect } from 'react';

export function ExoComponent67() {
  const [compteur, setCompteur] = useState<number>(67);
  useEffect(() => {
    console.log('Composant 67 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #67</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
