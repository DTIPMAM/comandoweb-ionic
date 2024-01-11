#!/bin/sh

BASE_ANGULAR_IMAGE_NAME="sx/angular"
BASE_CONTAINER_NAME="sx_angular"

start_prod(){
    # builda imagem da base/angular
    docker build -f Dockerfile.prod -t $BASE_ANGULAR_IMAGE_NAME .
    # roda um container com a imagem gerada
    docker run --name $BASE_CONTAINER_NAME -dp 4200:80 $BASE_ANGULAR_IMAGE_NAME
}

stop_prod() {
    # remove container em execução
    docker rm --force $BASE_CONTAINER_NAME
    # remove imagem base/angular
    docker rmi $BASE_ANGULAR_IMAGE_NAME --force
    # remove imagens e volumes não utilizados
    docker images prune
    docker volume prune --force
}

exec_scritp(){
    if [ "$1" = "start" ]; then
        start_prod
    elif [ "$1" = "stop" ]; then
        stop_prod
    else
        echo "\nUnknow $1 command!\nTry: 'npm run start:prod' or 'npm run stop:prod'\n"
    fi
}

exec_scritp $1