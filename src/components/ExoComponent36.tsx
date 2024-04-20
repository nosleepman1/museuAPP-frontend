// Exercice React / TS #36
import React, { useState, useEffect } from 'react';

export function ExoComponent36() {
  const [compteur, setCompteur] = useState<number>(36);
  useEffect(() => {
    console.log('Composant 36 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #36</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
