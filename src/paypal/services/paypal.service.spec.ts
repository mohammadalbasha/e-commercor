import { Test, TestingModule } from '@nestjs/testing';
import { PaypalService } from './paypal.service';
import { ConfigService } from '@nestjs/config';

const MockConfigService: Partial<ConfigService> = {
  get(key: string) {
    if (key == 'paypal') {
      return {
        clientId:
          'ARj-QtgLiQiofOK5V8n293S2TDpbfk184M1xCpVnq3IhcMigD4RiTP-jSMgfp6s4hi7FQ_-g3N-Vc8ry',
        clientSecret:
          'EAsQ_VVwyw8x5JShyHpKjqrXW7R0-t8_d9XO0M66E-kzdL3HR3KgTK94yswKUDuLKNHVS1AX_HJr4l_6',
      };
    }
  },
};
describe('PaypalService', () => {
  let service: PaypalService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaypalService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              // this is being super extra, in the case that you need multiple keys with the `get` method
              if (key === 'paypal') {
                return {
                  clientId:
                    'ARj-QtgLiQiofOK5V8n293S2TDpbfk184M1xCpVnq3IhcMigD4RiTP-jSMgfp6s4hi7FQ_-g3N-Vc8ry',
                  clientSecret:
                    'EAsQ_VVwyw8x5JShyHpKjqrXW7R0-t8_d9XO0M66E-kzdL3HR3KgTK94yswKUDuLKNHVS1AX_HJr4l_6',
                };
              }
              return null;
            }),
          },
        },
      ],
    }).compile();

    service = module.get<PaypalService>(PaypalService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create order when valida merchantId pass to it', async () => {
    const order = await service.createOrder('8B9TM3M3Y5RME', 100, 'magilla');
    console.log(order);
    expect(order).toBeDefined();
  });
});
