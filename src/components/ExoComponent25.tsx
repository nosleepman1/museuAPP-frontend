// Exercice React / TS #25
import React, { useState, useEffect } from 'react';

export function ExoComponent25() {
  const [compteur, setCompteur] = useState<number>(25);
  useEffect(() => {
    console.log('Composant 25 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #25</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
