// Exercice React / TS #147
import React, { useState, useEffect } from 'react';

export function ExoComponent147() {
  const [compteur, setCompteur] = useState<number>(147);
  useEffect(() => {
    console.log('Composant 147 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #147</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
