import { ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
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
  // Filter products based on selected brand, model, and filters
  const filteredProducts = products.filter(product => {
    // Filter by brand
    if (selectedBrand && product.brand !== selectedBrand) {
      return false;
    }
    
    // Filter by model
    if (selectedModel && !product.models.includes(selectedModel)) {
      return false;
    }
    
    // Filter by protection
    if (filters.protection.length > 0) {
      const hasMatchingProtection = filters.protection.some(p => 
        product.protection.includes(p)
      );
      if (!hasMatchingProtection) {
        return false;
      }
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sort) {
      case 'Prix croissant':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'Prix décroissant':
        return parseFloat(b.price) - parseFloat(a.price);
      case 'Nouveautés':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="flex-1">
      {/* Results header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-600">
          {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
          {selectedBrand && (
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs capitalize">
              {selectedBrand}
            </span>
          )}
          {selectedModel && (
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              {selectedModel}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Vue</span>
          <span className="text-sm text-gray-900 font-medium">9 par page</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <div className="relative mb-4">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
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

            {/* Product Info */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.subtitle}</p>
                <p className="text-xs text-gray-500 capitalize">Compatible: {product.brand}</p>
              </div>

              {/* Protection bars */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Protection</span>
                  <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-gray-800 rounded"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Poids</span>
                  <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-gray-800 rounded"></div>
                    <div className="w-8 h-1 bg-gray-800 rounded"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Épaisseur</span>
                  <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-gray-800 rounded"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="text-lg font-semibold text-gray-900">à partir de {product.price} €</div>
                <div className="text-xs text-gray-500">TVA incluse, frais de livraison non inclus</div>
              </div>

              {/* Colors */}
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 text-xs">
                  INFORMATIONS
                </Button>
                <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs">
                  CHOISIR UN DESIGN
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">Aucun produit trouvé</div>
          <div className="text-gray-400 text-sm">
            Essayez de modifier vos filtres ou sélectionnez une autre marque
          </div>
        </div>
      )}
    </div>
  );
}