import { Module } from '@nestjs/common';
import { TrialService } from './trial.service';
import { TrialController } from './trial.controller';

@Module({
  providers: [TrialService],
  controllers: [TrialController]
})
export class TrialModule {}
