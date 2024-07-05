// Exercice React / TS #77
import React, { useState, useEffect } from 'react';

export function ExoComponent77() {
  const [compteur, setCompteur] = useState<number>(77);
  useEffect(() => {
    console.log('Composant 77 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #77</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
