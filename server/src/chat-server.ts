import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Message } from './model/chat.model';

export class ChatServer {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;


        constructor() {
            
        }
    private createApp(): void {
        this.app = express();
    }
    private createServer(): void {
        this.server =createServer(this.app);
    }
    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }
    private sockets(): void {
        this.io = socketIo(this.server);
    }
    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running', this.port);
        })
    
    this.io.on('connect', (socket: any) => {
        console.log('Client connect', this.port);
        socket.on('message', (m: Message) => {
            console.log('[server](message', JSON.stringify(m));
            this.io.emit('message', m);
        });
        socket.on('disconnect', () => {
            console.log('Client Gone');
        })
    })

    }
    public getApp(): express.Application {
        return this.app;
    }
}