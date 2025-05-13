import { CmIconAction } from "../../constants/cm-icon-action";

export interface TableColumnsModel {
  //column name selector
  key: string;
  //column name display
  value: string;
  //column type
  type?: string;
  //is searchable
  searchable?: boolean;
  // element type
  elementType?: string;
  options?: string[];
  memberStatus?: any[];
  isExpandable?: boolean;
  isActionLink?: boolean;
  sortRequired?: boolean;
  backEndSort?: boolean;
  sortField?: string
  sortOrder?: string;
  isDisabled?: boolean;
  id?: any;
  displayName?: any;
  iconValue?: CmIconAction;

}
