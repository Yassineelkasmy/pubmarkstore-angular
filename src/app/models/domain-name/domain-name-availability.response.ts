import { DomainNameAvailability } from './domain-name-availability.enum';

export interface DomainNameAvailabilityResponse {
  DomainInfo: {
    domainAvailability: DomainNameAvailability;
    domainName: string;
  };
}
