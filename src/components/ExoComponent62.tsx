// Exercice React / TS #62
import React, { useState, useEffect } from 'react';

export function ExoComponent62() {
  const [compteur, setCompteur] = useState<number>(62);
  useEffect(() => {
    console.log('Composant 62 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #62</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
