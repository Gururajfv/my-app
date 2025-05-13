import { TableColumnsModel } from "../../model/table-column/table-column.model";
import { TestItemModel } from "../../model/test-model/test-item.model";

export class TestMock {
    column: TableColumnsModel[] = [
        { key: 'sNo', value: 'S.No' },
        {
            key: 'albumId',
            value: 'Album ID',
            type: 'text',
            elementType: 'dealerCode'
        },
        {
            key: 'title',
            value: 'Title',
            type: 'text',
            elementType: 'dealerCode'
        },
    ];
    columnsKeys: string[] = [
        'sNo',
        'albumId',
        'title'
    ];
    dataArray: TestItemModel[] = [];
}