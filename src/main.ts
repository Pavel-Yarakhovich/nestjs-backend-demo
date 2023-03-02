import {NestFactory} from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    // Generate documentation
    const config = new DocumentBuilder()
        .setTitle('Pavel Backend MVP')
        .setDescription('A basic MVP created with NestJS, Sequelize, Postgres and Docker')
        .setVersion('1.0.0')
        .addTag('Pavel Learning')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    // Start the server
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()