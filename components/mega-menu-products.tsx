import { ChevronRight } from 'lucide-react';

interface MegaMenuProductsProps {
  mobile?: boolean;
}

export default function MegaMenuProducts({ mobile = false }: MegaMenuProductsProps) {
  return (
    <div className={`${mobile ? 'px-2 py-4' : 'max-w-7xl mx-auto px-4 py-8'}`}>
      <div className={`${mobile ? 'space-y-6' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'}`}>
        {/* Univers de produits */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Univers de produits</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600 block py-1">Coques de téléphones</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coques colliers</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Accessoires pour téléphones</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coques pour tablettes & ordinateur</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Accessoires</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Accessoires Apple</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Autocollants & stickers</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700 pt-2">
              <a href="#" className="flex items-center">
                Tous nos univers de produits
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Nos coques */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Nos coques</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque en silicone</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Étui folio avec languette</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque premium</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque organique</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque renforcée</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque Slim en silicone</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque en verre trempé</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque silicone Premium</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque collier</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700 pt-2">
              <a href="#" className="flex items-center">
                Toutes nos coques
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Marques favorites */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Marques favorites</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600 block py-1">iPhone 16</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">iPhone 15</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">iPhone 14</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">iPhone 13</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">iPhone 12</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Samsung Galaxy S24</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Samsung Galaxy S23</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Samsung Galaxy S22</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Samsung Galaxy A54 5G</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Google Pixel 9</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700 pt-2">
              <a href="#" className="flex items-center">
                Toutes nos marques
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Nos produits */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Nos produits</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600 block py-1">Sangle</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Protection d'écran GreenMnky</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">PopGrip</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Autocollants pour ordinateurs</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Autocollants pour consoles</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Pochette</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Étui folio avec languette</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Mini porte-monnaie</a></li>
            <li><a href="#" className="hover:text-blue-600 block py-1">Coque Apple AirPods</a></li>
            <li className="flex items-center text-blue-600 hover:text-blue-700 pt-2">
              <a href="#" className="flex items-center">
                Tous nos produits
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
          
          {/* Featured product - visible on all screens but optimized for mobile */}
          <div className={`mt-6 bg-teal-100 rounded-lg p-3 md:p-4 ${mobile ? 'max-w-xs mx-auto' : ''}`}>
            <div className="flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-200 rounded-lg mr-3 md:mr-4 flex-shrink-0">
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