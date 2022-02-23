import { AppState } from './state.enum';
import { AppStatus } from './status.enum';
import { AppType } from './type.enum';

export interface Application {
  _id: string;

  projectId: string;

  name: string;

  description: string;

  type: AppType;

  domains: string[];

  status: AppStatus;

  state: AppState;

  deadline: Date;

  estimated_price: number;

  price: number;

  preview: string;

  uptime: number;
}
