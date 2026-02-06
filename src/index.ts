import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import authRoutes from './routes/authRoutes'
import { connectDB } from './config/database';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const PORT = 3001;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Isso indica ao express que qualquer requisição que comece com esse caminho é tratada pelo middleware subsequente
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT at http://localhost:${PORT}`);
});

connectDB().catch((err)=>{
    console.log(err);
});