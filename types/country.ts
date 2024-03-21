export interface Country {
  name: string;
  fullName: string;
  demonym: string;
  flag: string;
  countryCode: string;
  map: string;
  continent: string;
  description: string;
  area: {
    squreKilometers: number;
    squreMiles: number;
  };
  nationalAnimal: string | null;
  independenceDay: string | null;
  nationalDishes: {
    name: string;
    description: string;
  }[];
  wikipediaLink: string;
  neighbouringCountries: string[] | null;
  adjacentSeas: string[] | null;
  adjacentOceans: string[] | null;
  placesToVisit: {
    name: string;
    description: string | null;
    city: string | null;
    region: string | null;
    geographicCoordinates: string | null;
    establishedYear: string | number | null;
  }[];
  capitalCity: string;
  officialLanguages: string[];
  spokenLanguages: string[];
  currency: {
    name: string;
    code: string;
  };
  timeZone: string;
  nationalAnthem: {
    name: string;
    anthemLength: string;
    description: string | null;
  };
  nationalFlagDescription: string | null;
  nationalEmblem: {
    name: string;
    description: string | null;
    image: string | null;
  };
  nationalSymbol: {
    name: string;
    description: string | null;
    image: string | null;
  };
  nationalFlower: {
    name: string;
    description: string | null;
    image: string | null;
  };
  nationalHolidays: {
    name: string | null;
    date: string;
    description: string | null;
  }[];
  popularFestivals: {
    name: string;
    description: string | null;
    duration: string;
  }[];
  religions: string[];
  majorAirports: {
    name: string;
    city: string;
    region: string | null;
    geographicCoordinates: string | null;
    establishedYear: number;
  }[];
  majorPorts: {
    name: string;
    city: string;
    region: string | null;
    geographicCoordinates: string | null;
    establishedYear: number;
  }[];
  majorUniversities: {
    name: string;
    city: string;
    region: string | null;
    geographicCoordinates: string | null;
    establishedYear: number;
    description: string | null;
  }[];
  nationalSports: string[];
  majorIndustries: string[];
  educationSystem: string;
  isLeftHandDrive: boolean;
  isRightHandDrive: boolean;
  numbersOfIsland: number;
}
