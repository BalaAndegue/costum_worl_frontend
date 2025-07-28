import { ChevronRight } from 'lucide-react';

export default function MegaMenuProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-8">
        {/* Univers de produits */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Univers de produits</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Coques de téléphones</a></li>
            <li><a href="#" className="hover:text-blue-600">Coques colliers</a></li>
            <li><a href="#" className="hover:text-blue-600">Accessoires pour téléphones</a></li>
            <li><a href="#" className="hover:text-blue-600">Coques pour tablettes & ordinateur</a></li>
            <li><a href="#" className="hover:text-blue-600">Accessoires</a></li>
            <li><a href="#" className="hover:text-blue-600">Accessoires Apple</a></li>
            <li><a href="#" className="hover:text-blue-600">Autocollants & stickers</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700">
              <a href="#" className="flex items-center">
                Tous nos univers de produits
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Nos coques */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Nos coques</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Coque en silicone</a></li>
            <li><a href="#" className="hover:text-blue-600">Étui folio avec languette</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque premium</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque organique</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque renforcée</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque Slim en silicone</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque en verre trempé</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque silicone Premium</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque collier</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700">
              <a href="#" className="flex items-center">
                Toutes nos coques
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Marques favorites */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Marques favorites</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">iPhone 16</a></li>
            <li><a href="#" className="hover:text-blue-600">iPhone 15</a></li>
            <li><a href="#" className="hover:text-blue-600">iPhone 14</a></li>
            <li><a href="#" className="hover:text-blue-600">iPhone 13</a></li>
            <li><a href="#" className="hover:text-blue-600">iPhone 12</a></li>
            <li><a href="#" className="hover:text-blue-600">Samsung Galaxy S24</a></li>
            <li><a href="#" className="hover:text-blue-600">Samsung Galaxy S23</a></li>
            <li><a href="#" className="hover:text-blue-600">Samsung Galaxy S22</a></li>
            <li><a href="#" className="hover:text-blue-600">Samsung Galaxy A54 5G</a></li>
            <li><a href="#" className="hover:text-blue-600">Google Pixel 9</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700">
              <a href="#" className="flex items-center">
                Toutes nos marques
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Nos produits */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Nos produits</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Sangle</a></li>
            <li><a href="#" className="hover:text-blue-600">Protection d'écran GreenMnky</a></li>
            <li><a href="#" className="hover:text-blue-600">PopGrip</a></li>
            <li><a href="#" className="hover:text-blue-600">Autocollants pour ordinateurs</a></li>
            <li><a href="#" className="hover:text-blue-600">Autocollants pour consoles</a></li>
            <li><a href="#" className="hover:text-blue-600">Pochette</a></li>
            <li><a href="#" className="hover:text-blue-600">Étui folio avec languette</a></li>
            <li><a href="#" className="hover:text-blue-600">Mini porte-monnaie</a></li>
            <li><a href="#" className="hover:text-blue-600">Coque Apple AirPods</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700">
              <a href="#" className="flex items-center">
                Tous nos produits
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
          
          {/* Featured product */}
          <div className="mt-6 bg-teal-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-teal-200 rounded-lg mr-4">
                <img 
                  src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="iPhone case" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded mb-1 inline-block">
                  MARVEL
                </div>
                <h4 className="font-semibold text-sm">Produits phares : coques pour iPhone</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}