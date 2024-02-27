// Exercice React / TS #20
import React, { useState, useEffect } from 'react';

export function ExoComponent20() {
  const [compteur, setCompteur] = useState<number>(20);
  useEffect(() => {
    console.log('Composant 20 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #20</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
