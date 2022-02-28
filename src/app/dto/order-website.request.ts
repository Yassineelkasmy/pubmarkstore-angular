export interface OrderWebsiteRequest {
  name: string;
  description: string;
  domain: string;
  imported_domain: string;
  categories: string[];
  features: string[];
  deadline: string;
  projectId: string;
}
