import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  private textMsg
  private socket
  private messages
  constructor() { 
    this.messages = [] 
    this.socket = io.connect('http://localhost:8081')
    this.socket.on('chat', (data) => {
      console.log("Sur le channel chat on a reçu :", data)
      this.messages.push(data.message)
    })
  }

  ngOnInit() {
  }

  sendMsg(){
    console.log('Send message :', this.textMsg)
    this.socket.emit('chat', {
      message: this.textMsg
    })
  }

  onChange(data){
    console.log('Changed :', data)
    this.textMsg = data
  }
}
