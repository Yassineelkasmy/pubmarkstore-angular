export interface CreateProjectStep {
  step: number;
  canSkip?: boolean;
  canContinue(): boolean | undefined;
}
