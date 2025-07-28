import { ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  // ... (votre tableau de produits existant)
   {
    id: 1,
    title: 'Coque en silicone',
    subtitle: 'transparent',
    price: '24,95',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#E3F2FD', '#000000', '#FFFFFF'],
    isNew: false,
    hasInfo: false,
    brand: 'apple',
    models: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 15 Pro Max', 'iPhone 15 Pro'],
    protection: ['solide'],
    material: 'silicone'
  },
  {
    id: 2,
    title: 'Coque miroir',
    subtitle: 'argent',
    price: '39,95',
    image: 'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#E3F2FD', '#FFC107', '#000000', '#E0E0E0', '#FFB300', '#424242'],
    isNew: true,
    hasInfo: false,
    brand: 'samsung',
    models: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S23 Ultra'],
    protection: ['resistant', 'robuste'],
    material: 'metal'
  },
  {
    id: 3,
    title: 'Coque avec languette',
    subtitle: 'noir',
    price: '34,95',
    image: 'https://images.pexels.com/photos/5081391/pexels-photo-5081391.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#000000', '#FFFFFF'],
    isNew: false,
    hasInfo: true,
    brand: 'apple',
    models: ['iPhone 16', 'iPhone 15', 'iPhone 14'],
    protection: ['solide', 'resistant'],
    material: 'cuir'
  },
  {
    id: 4,
    title: 'Coque Premium',
    subtitle: 'mat',
    price: '29,95',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#000000', '#FFFFFF'],
    isNew: false,
    hasInfo: false,
    brand: 'samsung',
    models: ['Galaxy S24', 'Galaxy S23', 'Galaxy A54 5G'],
    protection: ['solide'],
    material: 'plastique'
  },
  {
    id: 5,
    title: 'Coque renforcée',
    subtitle: 'mat',
    price: '32,95',
    image: 'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#000000', '#FFFFFF'],
    isNew: false,
    hasInfo: true,
    brand: 'google',
    models: ['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 8 Pro'],
    protection: ['robuste', 'resistant'],
    material: 'composite'
  },
  {
    id: 6,
    title: 'Smart Flip',
    subtitle: 'noir',
    price: '39,95',
    image: 'https://images.pexels.com/photos/5081391/pexels-photo-5081391.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#000000', '#FFFFFF'],
    isNew: true,
    hasInfo: false,
    brand: 'xiaomi',
    models: ['Xiaomi 14 Ultra', 'Xiaomi 14', 'Xiaomi 13T Pro'],
    protection: ['solide', 'resistant'],
    material: 'cuir'
  },
  {
    id: 7,
    title: 'Coque transparente',
    subtitle: 'crystal clear',
    price: '19,95',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#FFFFFF', '#E3F2FD'],
    isNew: false,
    hasInfo: false,
    brand: 'huawei',
    models: ['P60 Pro', 'P60', 'Mate 60 Pro'],
    protection: ['solide'],
    material: 'silicone'
  },
  {
    id: 8,
    title: 'Coque antichoc',
    subtitle: 'protection maximale',
    price: '44,95',
    image: 'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#000000', '#FF5722', '#2196F3'],
    isNew: true,
    hasInfo: true,
    brand: 'apple',
    models: ['iPhone 16 Pro Max', 'iPhone 16 Pro'],
    protection: ['robuste', 'resistant'],
    material: 'composite'
  },
  {
    id: 9,
    title: 'Coque écologique',
    subtitle: 'biodégradable',
    price: '27,95',
    image: 'https://images.pexels.com/photos/5081391/pexels-photo-5081391.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    colors: ['#4CAF50', '#8BC34A', '#CDDC39'],
    isNew: false,
    hasInfo: false,
    brand: 'samsung',
    models: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24'],
    protection: ['solide'],
    material: 'bio'
  }
];

interface ProductGridProps {
  selectedBrand: string | null;
  selectedModel: string | null;
  filters: {
    protection: string[];
    materials: string[];
    sort: string;
  };
}

export default function ProductGrid({ selectedBrand, selectedModel, filters }: ProductGridProps) {
  // Filtrage et tri des produits (identique à votre version)
  const filteredProducts = products.filter(product => {
    if (selectedBrand && product.brand !== selectedBrand) return false;
    if (selectedModel && !product.models.includes(selectedModel)) return false;
    if (filters.protection.length > 0 && !filters.protection.some(p => product.protection.includes(p))) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sort) {
      case 'Prix croissant': return parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.'));
      case 'Prix décroissant': return parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.'));
      case 'Nouveautés': return (b.isNew ? 1 : -1);
      default: return 0;
    }
  });

  return (
    <div className="flex-1">
      {/* En-tête des résultats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">
            {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
          </span>
          {selectedBrand && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs capitalize">
              {selectedBrand}
            </span>
          )}
          {selectedModel && (
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              {selectedModel}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:inline">Vue</span>
          <span className="text-sm text-gray-900 font-medium">9 par page</span>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
            {/* Image du produit */}
            <div className="relative mb-3 sm:mb-4">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
                  NEW
                </div>
              )}
              {product.hasInfo && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white rounded-full p-1">
                  <Info className="h-3 w-3" />
                </div>
              )}
            </div>

            {/* Informations sur le produit */}
            <div className="space-y-2 sm:space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1">{product.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{product.subtitle}</p>
                <p className="text-xs text-gray-500 capitalize mt-1">Compatible: {product.brand}</p>
              </div>

              {/* Barres de caractéristiques */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Protection</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className={`w-6 sm:w-8 h-1 rounded ${i <= product.protection.length ? 'bg-gray-800' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Poids</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className={`w-6 sm:w-8 h-1 rounded ${i <= 2 ? 'bg-gray-800' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Épaisseur</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className={`w-6 sm:w-8 h-1 rounded ${i <= 1 ? 'bg-gray-800' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prix */}
              <div>
                <div className="text-base sm:text-lg font-semibold text-gray-900">à partir de {product.price} €</div>
                <div className="text-xs text-gray-500 hidden sm:block">TVA incluse, frais de livraison non inclus</div>
              </div>

              {/* Couleurs */}
              <div className="flex gap-1 sm:gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    title={`Couleur ${index + 1}`}
                  ></div>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs h-8 sm:h-9">
                  INFO
                </Button>
                <Button size="sm" className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs h-8 sm:h-9">
                  DESIGN
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Aucun résultat */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-500 text-base sm:text-lg mb-2">Aucun produit trouvé</div>
          <div className="text-gray-400 text-sm sm:text-base">
            Essayez de modifier vos filtres ou sélectionnez une autre marque
          </div>
        </div>
      )}
    </div>
  );
}