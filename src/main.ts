import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  app.enableCors();
  app.setGlobalPrefix('/v1/api');
  const config = new DocumentBuilder()
    .setTitle('Boilerplate NestJS API')
    .setDescription('Boilerplate NestJS API description')
    .setVersion('1.0')
    .addTag('API(s)')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/v1/api', app, document);
  await app.listen(3000);
}
bootstrap();
