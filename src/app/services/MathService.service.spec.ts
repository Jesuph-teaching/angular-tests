import { MathService } from './MathService.service';

describe('MathService', () => {
  let service: MathService;
  beforeEach(() => {
    service = new MathService();
  });
  describe('Add method', () => {
    it('should add 4 and 5 to 9', () => {
      const result = service.add(4, 5);
      expect(result).toEqual(9);
    });
  });
});
