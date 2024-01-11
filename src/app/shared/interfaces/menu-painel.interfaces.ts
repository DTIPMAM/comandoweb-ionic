export interface MenuCard {
    title: string;
    description: string;
    routerLink: string;
    roles: Array<string>;
    type: string;
}

export interface DataBox {
    value: number;
    description: string;
}

export interface SubmenuCard {
    title: string;
    description: string;
    routerLink: string;
    roles: Array<string>;
}
