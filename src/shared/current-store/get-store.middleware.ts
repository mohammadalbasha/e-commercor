import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Store } from 'src/store/models/store.model';
import { StoreService } from 'src/store/services/store.service';

@Injectable()
export class GetStoreMiddleware implements NestMiddleware {
  constructor(private readonly storeService: StoreService) {}
  async use(
    req: Request & { store: Store },
    res: Response,
    next: NextFunction,
  ) {
    const storeId = req.params.storeId;
    const store = await this.storeService.findById(storeId);
    if (!store) throw new NotFoundException('store not found');
    if (
      !store.isActive ||
      !store.isVerifiedAsMarket ||
      store.paypalMerchantId == 'f' ||
      !store.isAccepted
    )
      throw new BadRequestException('store inactive');
    req.store = store;
    next();
  }
}
