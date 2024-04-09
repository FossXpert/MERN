import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import adminRouter from './routes/adminRoutes';

const port : number = 3001
const app: express.Application = express();
app.use(bodyParser.json());
// Enable CORS for all domains
app.use(cors())

const connectionStringLocal: string = "mongodb://localhost:27017/";
const connectionString: string = "mongodb+srv://rahulray8518:rahulray85188101@cluster0.oveeh21.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionStringLocal);
mongoose.connection.on('connected', () => {
    console.log("mongoose Connected");
});
mongoose.connection.on('disconnected', () => {
    console.log("mongoose Disconnected");
});
mongoose.connection.on('error', (err: Error) => {
    console.log(`mongoose Error: ${err}`);
});

app.use('/admin',adminRouter)
app.listen(port,"100.93.3.137",() => {
    console.log(`Backend is running on PORT : ${port}`)
})