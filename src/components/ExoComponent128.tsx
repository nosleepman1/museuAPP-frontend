// Exercice React / TS #128
import React, { useState, useEffect } from 'react';

export function ExoComponent128() {
  const [compteur, setCompteur] = useState<number>(128);
  useEffect(() => {
    console.log('Composant 128 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #128</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
