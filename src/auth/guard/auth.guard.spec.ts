import { Reflector } from '@nestjs/core';
import { RoleGuard } from './role.guard.js';

describe('RoleGuard', () => {
  it('should be defined', () => {
    expect(new RoleGuard(new Reflector())).toBeDefined(); // <-- Resolvido
  });
});
