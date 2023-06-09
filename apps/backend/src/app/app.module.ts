import { CacheModule } from '@nestjs/cache-manager';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE, RouterModule } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RspdChallengeManagementModule } from '@rspd/challenge-management/backend/challenge-management';
import { RspdSemesterManagementModule } from '@rspd/challenge-management/backend/semester-management';
import { RspdMoodleManagementModule } from '@rspd/moodle-management/backend/moodle-management';
import { RspdMoodleRequestHandlerModule } from '@rspd/moodle-management/backend/moodle-request-handler';
import { AppConfig } from '@rspd/shared/backend/utils';
import { RspdGithubSubmissionModule } from '@rspd/student-submissions/backend/github-submissions';
import { RspdMoodleSubmissionModule } from '@rspd/student-submissions/backend/moodle-submissions';
import { RspdSubmissionInsightsModule } from '@rspd/student-submissions/backend/submission-insights';
import { RspdSubmissionManagementModule } from '@rspd/student-submissions/backend/submission-management';
import { RspdGithubAuthorizationModule } from '@rspd/user/backend/github-authorization';
import { RspdAuthModule } from '@rspd/user/backend/user-authentication';
import { RspdUserMailManagementModule } from '@rspd/user/backend/user-mail-management';
import { RspdUserModule } from '@rspd/user/backend/user-management';

import { ConfigUtils } from './config/util/config.utils';
import { backendRoutes } from './routing/routes';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['apps/api/.env.local', 'apps/api/.env.development', 'apps/api/.env.test'],
			validate: ConfigUtils.validateEnv,
		}),
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (config: ConfigService<AppConfig>) => {
				const postgresDB = config.get('postgresDB', { infer: true });

				return {
					type: 'postgres',
					database: postgresDB.name,
					host: postgresDB.host,
					username: postgresDB.user,
					port: postgresDB.port,
					password: postgresDB.password,
					autoLoadEntities: true,
					synchronize: true,
				};
			},
		}),
		CacheModule.register({ isGlobal: true }),
		ScheduleModule.forRoot(),

		RspdUserMailManagementModule,
		RspdUserModule,
		RspdChallengeManagementModule,
		RspdAuthModule,
		RspdSubmissionManagementModule,
		RspdGithubSubmissionModule,
		RspdGithubAuthorizationModule,
		RspdSubmissionInsightsModule,
		RspdMoodleManagementModule,
		RspdMoodleRequestHandlerModule,
		RspdMoodleSubmissionModule,
		RspdSemesterManagementModule,

		RouterModule.register(backendRoutes),
	],
	providers: [
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({
				whitelist: true,
			}),
		},
	],
})
export class AppModule {}
