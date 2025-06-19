import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT', 3000);
  const HOST = configService.get<string>('HOST', 'localhost');
  const FRONTEND_URL = configService.get<string>(
    'FRONTEND_URL',
    'http://localhost:5000',
  );

  // app.use(cookieParser()); doc ghi cookie

  app.enableCors({
    origin: [FRONTEND_URL],
    credentials: true,
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.setGlobalPrefix('api/v1');

  await app.listen(PORT, () => {
    console.log(`Application is running on http://${HOST}:${PORT}`);
  });
}
bootstrap();
