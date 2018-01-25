import { Component, OnInit } from '@angular/core';
import { Action } from './shared/model/action';
import { Event } from './shared/model/event';
import { Message } from './shared/model/message';
import { User } from './shared/model/user';
import { SocketService } from './shared/services/socket.service';

@Component({
  selector: 'tcc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  action = Action;
  user: User;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

}
