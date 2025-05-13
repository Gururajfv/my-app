export interface MenuModel {
  text?: string;
  icon?: string;
  routerLink?: any;
  aclId?: string;
  children?: MenuItemModel[];
  isShow?: boolean;
  anyChildSelected?: boolean;
  selectedItem?: MenuItemModel;
}

export interface MenuItemModel {
  text?: string;
  icon?: string;
  routerLink?: string;
  subChild?: SubChildItemModel[];
}

export interface SubChildItemModel {
  text?: string;
  icon?: string;
  routerLink: string;
  aclId?: string;
  children?: MenuItemModel[];
  isShow?: boolean;
  anyChildSelected?: boolean;
  selectedItem?: MenuItemModel;
}
