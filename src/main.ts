import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';
import { FormatoModule } from './formato/formato.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Global Pipes

  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
  }));
  // Swagger
  const options = new DocumentBuilder()
    .setTitle('Avanzo Format API')
    .setDescription('The Avanzo Format API')
    .setVersion('1.0')
    .addTag('NestJS-Avanzo')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [
      FormatoModule,
      // TODO: Update the rest of modules
    ],
  });
  SwaggerModule.setup('api', app, document);

  // Listen
  const port = process.env.PORT || 3000;
  console.log('Listening on port', port);
  await app.listen(port);
}
bootstrap();
