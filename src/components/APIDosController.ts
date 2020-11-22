var request = require('request');

const url = 'https://mocks.free.beeceptor.com/api2';

import { Request, Response } from 'express';

class APIDosController {
    public async index(req: Request, res: Response) {
        request(url,
            function (error: any, response: { statusCode: number; body: any; }, body: string) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                }
            });
    }
}

export const apiDos = new APIDosController();