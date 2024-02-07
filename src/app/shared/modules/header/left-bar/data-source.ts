import { ModulosSX } from "src/app/shared/interfaces/left-bar.interfaces";

export const MODULES_ACCESS : Array<ModulosSX> = [
  {
    name: 'Página Inicial',
    route: '',
    rules: []
  },
  {
    name: 'Painel de Adminsitrador',
    route: 'home/admin',
    rules: ["ADMIN"]
  }
]