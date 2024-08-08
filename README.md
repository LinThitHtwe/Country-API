# Country API

All api endpoints

```json
{
  "allCountriesUrl":"http://country-api-q7dz.onrender.com/countries/all",
  "countriesByContinent":"http://country-api-q7dz.onrender.com/countries/continent/{continentName}",
  "countriesBySovereignty":"http://country-api-q7dz.onrender.com/countries/sovereignty/{sovereigntyName}",
  "countryByISONumericCode":"http://country-api-q7dz.onrender.com/countries/isocode/numeric/{ISONumericCode}",
  "countryByISOCode":"http://country-api-q7dz.onrender.com/countries/isocode/{ISOCode}",
  "countriesByCurrencyCode":"http://country-api-q7dz.onrender.com/countries/currency/{currencyCode}",
  "countryByTopLevelDomain":"http://country-api-q7dz.onrender.com/countries/topLevelDomain/{topLevelDomain}",
  "countriesByDialingCode":"http://country-api-q7dz.onrender.com/countries/dialingCode/{dialingCode}"
}
```

Country Data Sample 
```typescript
interface Country {
  name: string;
  officialName: string;
  dialingCode: string;
  ISOCodes: {
    alpha2Code: string;
    alpha3Code: string;
    numeric: string;
  };
  currency: {
    name: string;
    ISOCode: string;
  };
  sovereignty: string;
  continent: string[];
  topLevelDomain: string;
}
```
