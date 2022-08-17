"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catsProviders = void 0;
const create_cat_1 = require("./entity/create.cat");
exports.catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(create_cat_1.CreateCat),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=cats.providers.js.map