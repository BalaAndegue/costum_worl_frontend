import { ChevronRight } from 'lucide-react';

interface MenuItem {
  name: string;
  desc: string;
  avatar: string;
}

interface MegaMenuMotifsProps {
  mobile?: boolean;
}

const brands: MenuItem[] = [
  { name: 'Naruto Shippuden', desc: 'Super-héros de l\'anime', avatar: '🍥' },
  { name: 'Peanuts', desc: 'Gang culte de la bande dessinée', avatar: '🥜' },
  { name: 'RC Lens', desc: 'Sang et Or', avatar: '⚽' },
  { name: 'Star Wars', desc: 'Pour les vrais Jedis', avatar: '⭐' },
  { name: 'Marvel', desc: 'Design de héros pour fans', avatar: '🦸' }
];

const disney: MenuItem[] = [
  { name: 'Lilo & Stitch', desc: 'Icones de l\'enfance', avatar: '🌺' },
  { name: 'Mickey Mouse', desc: 'Des classiques intemporels', avatar: '🐭' },
  { name: 'Princesse Disney', desc: 'Des héroïnes de conte de fées', avatar: '👑' },
  { name: 'Winnie l\'ourson', desc: 'Adorable amateur de miel', avatar: '🍯' },
  { name: 'Bambi', desc: 'Magie de la forêt', avatar: '🦌' }
];

const styles: MenuItem[] = [
  { name: 'Photographie', desc: 'Des images à couper le souffle', avatar: '📸' },
  { name: 'Illustrations', desc: 'Motifs artistiques', avatar: '🎨' },
  { name: 'Typographie', desc: 'L\'art de l\'écriture', avatar: '✒️' },
  { name: 'Noir & Blanc', desc: 'Simple & cool', avatar: '⚫' },
  { name: 'Motifs', desc: 'À pois, carreaux, etc.', avatar: '🔴' }
];

const trends: MenuItem[] = [
  { name: 'Les astronautes', desc: 'En direct de l\'espace', avatar: '🚀' },
  { name: 'Boho', desc: 'Magnifique style hippie', avatar: '🌙' },
  { name: 'Années 80', desc: 'Oldies but goldies', avatar: '📼' },
  { name: 'Citations', desc: 'Proverbes & citations cools', avatar: '💭' },
  { name: 'Designs d\'été', desc: 'Éclatants et beaux', avatar: '☀️' }
];

export default function MegaMenuMotifs({ mobile = false }: MegaMenuMotifsProps) {
  return (
    <div className={`${mobile ? 'px-2 py-4' : 'max-w-7xl mx-auto px-4 py-8'}`}>
      <div className={`${mobile ? 'space-y-6' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'}`}>
        {/* Marques populaires */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Marques populaires</h3>
          <ul className="space-y-2 md:space-y-3">
            {brands.map((brand) => (
              <li key={brand.name} className="flex items-center space-x-2 md:space-x-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                  {brand.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    <a href="#" className="hover:text-blue-600">{brand.name}</a>
                  </div>
                  <div className="text-xs text-gray-500">{brand.desc}</div>
                </div>
              </li>
            ))}
            <li className="flex items-center text-blue-600 hover:text-blue-700 mt-3 md:mt-4">
              <a href="#" className="flex items-center text-sm">
                Toutes nos marques
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Les favoris de Disney */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Les favoris de Disney</h3>
          <ul className="space-y-2 md:space-y-3">
            {disney.map((item) => (
              <li key={item.name} className="flex items-center space-x-2 md:space-x-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    <a href="#" className="hover:text-blue-600">{item.name}</a>
                  </div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </li>
            ))}
            <li className="flex items-center text-blue-600 hover:text-blue-700 mt-3 md:mt-4">
              <a href="#" className="flex items-center text-sm">
                Tous nos motifs Disney
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Styles de motifs favoris */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Styles de motifs favoris</h3>
          <ul className="space-y-2 md:space-y-3">
            {styles.map((style) => (
              <li key={style.name} className="flex items-center space-x-2 md:space-x-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                  {style.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    <a href="#" className="hover:text-blue-600">{style.name}</a>
                  </div>
                  <div className="text-xs text-gray-500">{style.desc}</div>
                </div>
              </li>
            ))}
            <li className="flex items-center text-blue-600 hover:text-blue-700 mt-3 md:mt-4">
              <a href="#" className="flex items-center text-sm">
                Tous nos styles
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>

        {/* Tendances actuelles */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Tendances actuelles</h3>
          <ul className="space-y-2 md:space-y-3">
            {trends.map((trend) => (
              <li key={trend.name} className="flex items-center space-x-2 md:space-x-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                  {trend.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    <a href="#" className="hover:text-blue-600">{trend.name}</a>
                  </div>
                  <div className="text-xs text-gray-500">{trend.desc}</div>
                </div>
              </li>
            ))}
            <li className="flex items-center text-blue-600 hover:text-blue-700 mt-3 md:mt-4">
              <a href="#" className="flex items-center text-sm">
                Toutes les tendances
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}