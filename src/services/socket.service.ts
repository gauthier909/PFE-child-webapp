import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

const IO_ROUTE = "http://localhost:8081"
const IO_ROOM = "testRoom"

@Injectable({
    providedIn: 'root'
  })
export class SocketService {
    private socket
    message: any[] = []
    constructor(){}
    
    /**
     * L'initialisation de la connection + ajout des listeners
     */
    socketInit(){
        this.socket = io(IO_ROUTE)
        this.socket.emit("joinRoom", IO_ROOM)
        this.socket.on("message", (message) => {
            this.message = message
            console.log("[SOCKET] Message recu : ", this.message)
        })
    }

    /**
     * Permet d'envoyer un message au front-end du professionnel via le backend
     * @param message Le message que l'on souhaite envoyer au front-end du professionnel
     */
    sendMessage(message: any){
        this.socket.emit("message", ({room: IO_ROOM, message:message}))
    }
}