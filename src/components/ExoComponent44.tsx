// Exercice React / TS #44
import React, { useState, useEffect } from 'react';

export function ExoComponent44() {
  const [compteur, setCompteur] = useState<number>(44);
  useEffect(() => {
    console.log('Composant 44 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #44</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
