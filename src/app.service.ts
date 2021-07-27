import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    const arrayTest = ['a', 'b', 'c', 'd', 'e'];
    return arrayTest;
  }
}
