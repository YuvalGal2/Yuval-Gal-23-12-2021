export interface City {
  "Version": number,
  "Key": string,
  "Type": string,
  "Rank": number,
  "LocalizedName": string
  "WeatherText"?: string,
  "Temperature"?: {
    Metric?: {
      "Unit": string,
      "UnitType": number
      "Value": number
    },
    "Imperial?":{
      "Unit": string,
      "UnitType": number
      "Value": number
    }
  }
  "Country": {
    ID: string;
  },
  "AdministrativeArea": {}
}
