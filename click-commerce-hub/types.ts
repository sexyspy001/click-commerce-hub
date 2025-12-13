export interface ServiceData {
  id: string;
  title: string;
  whatIsIt: string; // "What we offer" / "What this service is"
  whatWeDo?: string[]; // Optional bullet points
  howItHelps: string; // "How it matters" / "How it helps sellers"
  expectedChanges?: string; // "What changes you can expect from us"
  disclaimer?: string;
}

export type PlatformCategory = 'marketplace' | 'website' | 'marketing' | 'compliance';

export interface PlatformData {
  id: string;
  title: string;
  description: string;
  color: string; // For UI accents
  category: PlatformCategory;
  services: ServiceData[];
  // New platform context fields
  aboutPlatform?: string;
  whySellHere?: string[];
  registrationLink?: string;
}

export enum DisclaimerType {
  IP_LEGAL = "IP_LEGAL",
  FINANCIAL = "FINANCIAL",
  LOGISTICS = "LOGISTICS",
  NONE = "NONE"
}