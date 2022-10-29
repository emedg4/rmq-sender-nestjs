import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices"
import { NEW_ORDER_FROM_VTEX } from './constants/services'
import { randomInt } from 'crypto';
@Injectable()
export class AppService {
  constructor(@Inject(NEW_ORDER_FROM_VTEX) private newOrderClient: ClientProxy ){
  }

  async sendOrderFromVtex() {

    const message = {
      id: randomInt(9999),
      data: "Webos"
    }
    await this.newOrderClient.emit('newOrder',message)
    return
  }
  
}