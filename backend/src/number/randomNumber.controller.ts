import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/randomNumber')
export class RandomNumberController {
  @Post('/')
  AskRandomNumber(@Req() request: Request, @Res() response: Response) {
    const randomNuber = Math.floor(Math.random() * 100) + 1;
    return response.json({ value: randomNuber });
  }
}
