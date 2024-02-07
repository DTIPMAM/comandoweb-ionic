export interface ModulosSX {
  name: string;
  route: string;
  children?: Array<ModulosSX>;
  rules: Array<string>;
}