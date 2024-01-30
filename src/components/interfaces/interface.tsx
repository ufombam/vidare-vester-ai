export interface FormData {
    name: string;
    website: string;
    location: string;
    industry: string;
    technology: string[];
    foundedDate: string;
}

export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}