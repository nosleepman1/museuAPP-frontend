// Exercice React / TS #53
import React, { useState, useEffect } from 'react';

export function ExoComponent53() {
  const [compteur, setCompteur] = useState<number>(53);
  useEffect(() => {
    console.log('Composant 53 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #53</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
