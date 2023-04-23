import { JwtStrategy } from '../jwt.strategy';
import { AuthService } from './auth.service';

export { AuthService } from './auth.service';
export { JwtStrategy } from '../jwt.strategy';

export const AUTH_SERVICES = [AuthService, JwtStrategy];
