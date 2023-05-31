import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Store } from 'src/store/models/store.model';
import { StoreService } from 'src/store/services/store.service';
export declare class GetStoreMiddleware implements NestMiddleware {
    private readonly storeService;
    constructor(storeService: StoreService);
    use(req: Request & {
        store: Store;
    }, res: Response, next: NextFunction): Promise<void>;
}
