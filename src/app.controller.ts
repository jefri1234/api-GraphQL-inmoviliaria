import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface HelloResponse {
  message: string;
  status: string;
  timestamp: string;
}



@Controller({})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/inicio')
  getHello():HelloResponse {
    return this.appService.getHello();
  }
}
