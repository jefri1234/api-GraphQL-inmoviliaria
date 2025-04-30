import { Injectable } from '@nestjs/common';

interface HelloResponse {
  message: string;
  status: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return {
      message: 'Hola mundo desde AppService',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
