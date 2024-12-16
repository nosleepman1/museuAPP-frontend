// Exercice React / TS #153
import React, { useState, useEffect } from 'react';

export function ExoComponent153() {
  const [compteur, setCompteur] = useState<number>(153);
  useEffect(() => {
    console.log('Composant 153 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #153</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
