export interface PrintNodeWhoami {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    canCreateSubAccounts: boolean;
    creatorEmail: null;
    creatorRef: null;
    childAccounts: any[]; // Probably PrintNodeAccount
    credits: number;
    numComputers: number;
    totalPrints: number;
    versions: any[];
    connected: any[];
    Tags: any[]; // Probably PrintNodeAccountTags
    state: string;
    permissions: string[];
  }
  export interface PrintNodeAccount {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    canCreateSubAccounts: boolean;
    creatorEmail: string;
    creatorRef: string;
    childAccounts: any[];
    credits: null;
    numComputers: number;
    totalPrints: number;
    versions: any[];
    connected: any[];
    Tags: PrintNodeAccountTags;
    ApiKeys: PrintNodeAccountAPIKeys;
    state: string;
  }
  
  export interface PrintNodeAccountAPIKeys {
    production: string;
    development: string;
  }
  
  export interface PrintNodeAccountTags {
    likes: string;
  }