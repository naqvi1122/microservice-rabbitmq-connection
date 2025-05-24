import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user-created')
  @Get()
  getHello(@Payload() user: any) {
    console.log('inside user service ', user);
    return { message: 'this message is coming from user service' };
    //return this.appService.getHello();
  }
}
