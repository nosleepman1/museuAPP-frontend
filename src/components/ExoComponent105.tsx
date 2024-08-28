// Exercice React / TS #105
import React, { useState, useEffect } from 'react';

export function ExoComponent105() {
  const [compteur, setCompteur] = useState<number>(105);
  useEffect(() => {
    console.log('Composant 105 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #105</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
