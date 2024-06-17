// Exercice React / TS #68
import React, { useState, useEffect } from 'react';

export function ExoComponent68() {
  const [compteur, setCompteur] = useState<number>(68);
  useEffect(() => {
    console.log('Composant 68 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #68</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
