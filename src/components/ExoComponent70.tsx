// Exercice React / TS #70
import React, { useState, useEffect } from 'react';

export function ExoComponent70() {
  const [compteur, setCompteur] = useState<number>(70);
  useEffect(() => {
    console.log('Composant 70 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #70</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
