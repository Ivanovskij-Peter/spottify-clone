import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';


@Module({
imports:[
    // ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env`, isGlobal: true }),
    ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(`mongodb+srv://peterivanovskij:gsoWr6MNltstowTB@cluster0.6xjtwq6.mongodb.net/`),
    TrackModule,FileModule]
})

export  class  AppModule{}