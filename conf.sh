#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'
ROCKET='\xf0\x9f\x9a\x80'

export_nvm(){
    # This loads nvm
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
}


echo -e "\e[01;33m \nVerificando se o seu computador cumpre os requisitos para rodar a aplicação\e[00m 🔖"


echo -e "\nVerificando o pacote \e[01;33mnpm\e[00m..."

# Verificar se o npm está instalado e na versão adequada
npm_version=$(npm -v 2>/dev/null)
required_npm_version="8.19.2"

if [ -z "$npm_version" ] || [ "$npm_version" != "$required_npm_version" ]; then
    echo -e "-- Instalando o pacote \e[01;33mnpm\e[00m na versão $required_npm_version..."
    
    # Atualizar o npm para a versão especificada
    npm install -g "npm@$required_npm_version"
    
    echo -e "-- Versão do \e[01;33mnpm\e[00m requerida instalada com sucesso ✅"
else
    echo -e "-- Versão do \e[01;33mnpm\e[00m já atende os requisitos do projeto ✅"
fi


echo -e "\nVerificando o pacote \e[01;33mNode Version Manager (NVM)\e[00m..."

# Verificar se o npm está instalado e na versão adequada
export_nvm
nvm_version=$(nvm -v 2>/dev/null)

# Verificar se o Node Version Manager (NVM) está instalado
if [ -z "$nvm_version" ]; then
    echo -e "-- Instalando o \e[01;33mNode Version Manager (NVM)\e[00m"
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    source ~/.nvm/nvm.sh

    echo -e "-- O \e[01;33mNode Version Manager (NVM)\e[00m foi instalado com sucesso ✅"
else
    echo -e "-- O \e[01;33mNode Version Manager (NVM)\e[00m já está instalado ✅"
fi


echo -e "\nVerificando o pacote \e[01;33mnode\e[00m..."

# Verificar se o Node.js está instalado e na versão adequada
node_version=$(node -v 2>/dev/null)
required_node_version="v18.16.1"

# Verificar se o Node.js está instalado e na versão adequada
if ! nvm ls "$required_node_version" &> /dev/null; then
    echo -e "-- Instalando o pacote \e[01;33mnode\e[00m na versão $required_node_version..."
    nvm install "$required_node_version"

    echo -e "-- Versão do \e[01;33mnode\e[00m requerida instalada com sucesso ✅"
else
    echo -e "-- Versão do \e[01;33mnode\e[00m já atende os requisitos do projeto ✅"
fi