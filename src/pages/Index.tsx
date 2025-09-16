import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('SK');

  // Mock tender data
  const tenders = [
    {
      id: 1,
      title: 'Modernizácia IT infraštruktúry mestského úradu',
      procurer: 'Mesto Bratislava',
      location: 'Bratislava',
      publishDate: '15.09.2025',
      budget: '2 450 000,00 €',
      deadline: '25.10.2025',
      daysLeft: 39,
      status: 'Otvorený'
    },
    {
      id: 2,
      title: 'Dodávka zdravotníckych pomôcok pre nemocnice',
      procurer: 'Ministerstvo zdravotníctva SR',
      location: 'Celá SR',
      publishDate: '12.09.2025',
      budget: '8 750 000,00 €',
      deadline: '02.10.2025',
      daysLeft: 16,
      status: 'Otvorený'
    },
    {
      id: 3,
      title: 'Výstavba cyklotrasy v mestskej časti',
      procurer: 'Mestská časť Ružinov',
      location: 'Bratislava - Ružinov',
      publishDate: '10.09.2025',
      budget: '1 250 000,00 €',
      deadline: '18.09.2025',
      daysLeft: 2,
      status: 'Čoskoro vyprší'
    },
    {
      id: 4,
      title: 'Rekonštrukcia základnej školy',
      procurer: 'Obec Senec',
      location: 'Senec',
      publishDate: '08.09.2025',
      budget: '3 200 000,00 €',
      deadline: '15.11.2025',
      daysLeft: 60,
      status: 'Otvorený'
    }
  ];

  const getDeadlineBadgeColor = (daysLeft: number) => {
    if (daysLeft <= 3) return 'bg-red-100 text-red-800 border-red-200';
    if (daysLeft <= 14) return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-light-100 font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Building2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-montserrat font-bold text-charcoal-500">
                Štátny tenderový portál
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-charcoal-500 hover:text-primary transition-colors">
                Domov
              </a>
              <a href="#" className="text-charcoal-500 hover:text-primary transition-colors">
                Vyhľadávanie
              </a>
              <a href="#" className="text-charcoal-500 hover:text-primary transition-colors">
                Pomoc
              </a>
              <a href="#" className="text-charcoal-500 hover:text-primary transition-colors">
                Kontakt
              </a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Language switcher */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setSelectedLanguage('SK')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    selectedLanguage === 'SK'
                      ? 'bg-primary text-white'
                      : 'text-charcoal-500 hover:bg-gray-50'
                  }`}
                >
                  SK
                </button>
                <button
                  onClick={() => setSelectedLanguage('EN')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    selectedLanguage === 'EN'
                      ? 'bg-primary text-white'
                      : 'text-charcoal-500 hover:bg-gray-50'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Auth buttons */}
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Prihlásenie
              </Button>
              <Button size="sm" className="hidden md:inline-flex">
                Registrácia
              </Button>

              {/* Mobile menu */}
              <Button variant="ghost" size="sm" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-500 to-charcoal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Národný tenderový portál
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Transparentné verejné obstarávanie pre modernú SR
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Zadajte názov tendra alebo kľúčové slovo"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white border-0 shadow-lg"
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90">
                Vyhľadať
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters bar */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-lg font-montserrat font-semibold text-charcoal-500">
              Filtre:
            </h2>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Kategória" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">IT a telekomunikácie</SelectItem>
                <SelectItem value="construction">Stavebníctvo</SelectItem>
                <SelectItem value="healthcare">Zdravotníctvo</SelectItem>
                <SelectItem value="education">Vzdelávanie</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Región" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bratislava">Bratislavský kraj</SelectItem>
                <SelectItem value="trnava">Trnavský kraj</SelectItem>
                <SelectItem value="trencin">Trenčiansky kraj</SelectItem>
                <SelectItem value="nitra">Nitriansky kraj</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Stav" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Otvorené</SelectItem>
                <SelectItem value="closing">Čoskoro vyprší</SelectItem>
                <SelectItem value="closed">Uzavreté</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Icon name="X" size={16} className="mr-2" />
              Vymazať filtre
            </Button>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Nájdených {tenders.length} tenderov
          </p>
        </div>

        {/* Tenders list */}
        <div className="space-y-4">
          {tenders.map((tender) => (
            <Card
              key={tender.id}
              className="hover:shadow-lg transition-all duration-200 hover:scale-[1.01] border border-gray-200"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-semibold text-charcoal-500 mb-2 hover:text-primary cursor-pointer">
                      {tender.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Icon name="Building" size={16} />
                        <span>{tender.procurer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        <span>{tender.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        <span>Publikované: {tender.publishDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-montserrat font-bold text-charcoal-500 mb-2">
                      {tender.budget}
                    </div>
                    <Badge
                      className={`${getDeadlineBadgeColor(tender.daysLeft)} font-medium`}
                    >
                      {tender.daysLeft} dní do uzávierky
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Clock" size={16} />
                    <span>Uzávierka: {tender.deadline}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Stiahnuť dokumentáciu
                    </Button>
                    <Button size="sm">
                      Zobraziť detail
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <span className="text-gray-500 px-2">...</span>
            <Button variant="outline" size="sm">10</Button>
            <Button variant="outline" size="sm">
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-500 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat font-semibold mb-4">O portáli</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">O nás</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ako to funguje</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Často kladené otázky</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Zdroje</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Dokumentácia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Štatistiky</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Právne</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Právne upozornenie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Podmienky používania</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ochrana údajov</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@tender.gov.sk
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +421 2 1234 5678
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Bratislava, SR
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Štátny tenderový portál. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;