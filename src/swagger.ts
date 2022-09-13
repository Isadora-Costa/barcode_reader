import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Bills')
  .setDescription('Barcode Reader API')
  .setVersion('0.0.2')
  .build();
