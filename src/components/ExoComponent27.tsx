// Exercice React / TS #27
import React, { useState, useEffect } from 'react';

export function ExoComponent27() {
  const [compteur, setCompteur] = useState<number>(27);
  useEffect(() => {
    console.log('Composant 27 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #27</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
