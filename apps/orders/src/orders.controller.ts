import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderStatus } from '.prisma/client/orders'

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get('orders')
  all() {
    return this.ordersService.all();
  }

  @Post('orders')
  create(@Body() data: OrderDto) {
    return this.ordersService.create(data)
  }

  @MessagePattern('payments')
  async complete(@Payload() message) {
    await this.ordersService.complete(message.order_id, message.status === 'APPROVED' ? OrderStatus.PAYED : OrderStatus.CANCELLED);
  }
}
