// Exercice React / TS #22
import React, { useState, useEffect } from 'react';

export function ExoComponent22() {
  const [compteur, setCompteur] = useState<number>(22);
  useEffect(() => {
    console.log('Composant 22 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #22</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
