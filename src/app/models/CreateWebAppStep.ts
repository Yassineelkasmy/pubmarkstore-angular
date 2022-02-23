export interface CreateWebAppStep {
  step: number;
  canSkip?: boolean;
  canContinue(): boolean | undefined;
}
