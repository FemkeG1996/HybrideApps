import { Language } from "./language";

export class Land {
        name:           string;
        topLevelDomain?: string[];
        alpha2Code?:     string;
        alpha3Code?:     string;
        callingCodes?:   string[];
        capital?:        string;
        altSpellings?:   string[];
        region?:         string;
        subregion?:      string;
        population?:     number;
        latlng:         number[];
        demonym?:        string;
        area?:           number | null;
        gini?:           number | null;
        timezones?:      string[];
        borders?:        string[];
        nativeName?:     string;
        numericCode?:    null | string;
        currencies?:     string[];
        languages:       Language[];
        translations?:   string;
        flag:           string;
        regionalBlocs?:  string[];
        cioc?:           null | string;

}
