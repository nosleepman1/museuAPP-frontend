// Exercice React / TS #50
import React, { useState, useEffect } from 'react';

export function ExoComponent50() {
  const [compteur, setCompteur] = useState<number>(50);
  useEffect(() => {
    console.log('Composant 50 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #50</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
