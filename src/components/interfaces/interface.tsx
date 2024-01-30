import { Dayjs } from 'dayjs';

export interface FormData {
    name: string;
    website: string;
    location: CountryType;
    industry: string;
    technology: string[];
    foundedDate: Dayjs | null;
}

export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}