// Exercice React / TS #63
import React, { useState, useEffect } from 'react';

export function ExoComponent63() {
  const [compteur, setCompteur] = useState<number>(63);
  useEffect(() => {
    console.log('Composant 63 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #63</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
