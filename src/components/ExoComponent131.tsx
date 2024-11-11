// Exercice React / TS #131
import React, { useState, useEffect } from 'react';

export function ExoComponent131() {
  const [compteur, setCompteur] = useState<number>(131);
  useEffect(() => {
    console.log('Composant 131 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #131</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
