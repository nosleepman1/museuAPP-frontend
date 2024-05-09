// Exercice React / TS #48
import React, { useState, useEffect } from 'react';

export function ExoComponent48() {
  const [compteur, setCompteur] = useState<number>(48);
  useEffect(() => {
    console.log('Composant 48 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #48</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
