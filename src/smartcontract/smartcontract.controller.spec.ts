import { Test, TestingModule } from '@nestjs/testing';
import { SmartcontractController } from './smartcontract.controller';

describe('Smartcontract Controller', () => {
  let controller: SmartcontractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartcontractController],
    }).compile();

    controller = module.get<SmartcontractController>(SmartcontractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
