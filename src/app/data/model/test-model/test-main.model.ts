import { TableColumnsModel } from "../table-column/table-column.model";
import { TestItemModel } from "./test-item.model";

export interface TestMainModel {
    column: TableColumnsModel[];
    columnsKeys: string[];
    dataArray: TestItemModel[];
}