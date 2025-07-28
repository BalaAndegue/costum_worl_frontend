import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Partie supérieure blanche */}
      <div className="bg-white text-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Colonne Best-sellers Apple */}
          <div>
            <h3 className="font-bold text-lg mb-4">Best-sellers Apple</h3>
            <ul className="space-y-2">
              {['iPhone 16', 'iPhone 14', 'iPhone 16 Pro', 'iPhone 15 Pro', 'iPhone 16 Pro Max', 
                'iPhone 15 Pro', 'iPhone 16 Plus', 'iPhone 12 Pro', 'iPhone 15 Pro', 'iPhone 12 Pro', 
                'iPhone 14 Pro'].map((model) => (
                <li key={model} className="hover:text-blue-600 cursor-pointer">Cogues iPhone {model}</li>
              ))}
            </ul>
          </div>

          {/* Colonne Best-sellers Samsung */}
          <div>
            <h3 className="font-bold text-lg mb-4">Best-sellers Samsung</h3>
            <ul className="space-y-2">
              {['Galaxy S24', 'Galaxy S24 Ultra', 'Galaxy S24 Plus', 'Galaxy S23 Ultra', 
                'Galaxy S23', 'Galaxy S22 Ultra', 'Galaxy S22', 'Galaxy S21 Ultra 5G'].map((model) => (
                <li key={model} className="hover:text-blue-600 cursor-pointer">Cogues Samsung {model}</li>
              ))}
            </ul>
          </div>

          {/* Colonne Top Produits */}
          <div>
            <h3 className="font-bold text-lg mb-4">Top Produits</h3>
            <ul className="space-y-2">
              {['Cogues colliers', 'Cogues pour AirPods', 'Autocollants pour ordinateurs', 
                'Cogues pour tablettes', 'Protections d\'écran pour smartphone'].map((product) => (
                <li key={product} className="hover:text-blue-600 cursor-pointer">{product}</li>
              ))}
            </ul>
          </div>

          {/* Colonne À propos */}
          <div>
            <h3 className="font-bold text-lg mb-4">À propos</h3>
            <ul className="space-y-2">
              {['Nature Nanotère', 'Mentions légales', 'Nouveau trouchets', 'Duranteur'].map((item) => (
                <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Colonne Contact et Paiement */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
              <ul className="space-y-2">
                {['Contacts', 'VISA', 'PayPal', '4 Pay'].map((item) => (
                  <li key={item} className="font-semibold hover:text-blue-600 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Paiement sécurisé</h3>
              <ul className="space-y-2">
                {['VISA', 'PayPal', '4 Pay'].map((item) => (
                  <li key={item} className="font-semibold hover:text-blue-600 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne Aide et Service */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Besoin d'aide ?</h3>
              <ul className="space-y-2">
                {['Moyens de paiement', 'Informations de livraison', 'FAQ produits', 
                  'FAQ design', 'FAQ services'].map((item) => (
                  <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Service</h3>
              <ul className="space-y-2">
                {['CDV', 'Droit de réinstallation', 'Politique de confidentialité', 
                  'Paramètres des cookies'].map((item) => (
                  <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Partie inférieure noire */}
      <div className="bg-black text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} VotreMarque. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            {['Mentions légales', 'CGV', 'Politique de confidentialité', 'Cookies'].map((item) => (
              <span key={item} className="text-sm hover:text-gray-300 cursor-pointer">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;