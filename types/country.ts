export interface Country {
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
