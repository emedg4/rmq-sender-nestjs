import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from './rmq/rmq.module';
import configuration from './configuration/configuration'
import { NEW_ORDER_FROM_VTEX } from './constants/services'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  })
    , RmqModule.register({
      name: NEW_ORDER_FROM_VTEX
    })],
  controllers: [AppController],
  providers: [AppService,]
})

export class AppModule {}


















// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ClientsModule, Transport, ClientProxyFactory } from '@nestjs/microservices';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { RmqModule } from './rmq/rmq.module';

// @Module({
//   imports: [ConfigModule, RmqModule],
//   controllers: [AppController],
//   providers: [AppService,
//   {
//     provide: 'notifications',
//     useFactory: (configService:ConfigService) => {
//       const user = configService.get('RABBITMQ_USER');
//       const password = configService.get('RABBITMQ_PASSWORD');
//       const host = configService.get('RABBITMQ_HOST');
//       const queueName = configService.get('RABBITMQ_QUEUE_NAME');
      
//       return ClientProxyFactory.create({
//         transport: Transport.RMQ,
//         options: {
//           urls: [`amqp://admin:admin@localhost:5672`],
//           queue: 'cats_queue',
//           queueOptions: {
//             durable: true,
//           },
//         },
//       })
//     },
//     inject: [ConfigService],
//   }
//   ],
// })

// export class AppModule {}
