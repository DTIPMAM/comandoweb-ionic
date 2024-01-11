#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'
ROCKET='\xf0\x9f\x9a\x80'

source ./conf.sh

export_nvm(){
    # This loads nvm
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
}

verify_dependencies(){
    # Verificar se as dependências estão instaladas
    if [ ! -d "node_modules" ]; then
        echo -e "\e[01;33m \nInstalando dependências do projeto ${BLUE}base-angular-dti\e[00m 🔖"
        npm install
    fi
}

init(){
    export_nvm
    nvm use v18.16.1
    verify_dependencies

    echo -e "\n${ROCKET} ${GREEN} Iniciando o projeto ${BLUE}base-angular-dti${GREEN}...${NC}"
    npm run start
}

init