import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DatabaseModule } from 'src/database.module';
import { catsProviders } from './cats.providers';

@Module({
  imports: [DatabaseModule ],
  controllers: [CatsController],
  providers: [...catsProviders, CatsService],
})
export class CatsModule {}
