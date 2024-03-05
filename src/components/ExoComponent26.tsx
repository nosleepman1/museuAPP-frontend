// Exercice React / TS #26
import React, { useState, useEffect } from 'react';

export function ExoComponent26() {
  const [compteur, setCompteur] = useState<number>(26);
  useEffect(() => {
    console.log('Composant 26 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #26</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
