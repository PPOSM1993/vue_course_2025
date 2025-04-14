export interface Country {
    name: {
        common: string;
    },
    capital: String[];
    cca3: string;
    flags: {
        png: string;
        svg: string;
    };
    population: number;
}