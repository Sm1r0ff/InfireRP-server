import mongoose from "mongoose";
export const db = mongoose.connect('mongodb://localhost:27017/infirerp').then(()=>console.log('Connected to MongoDB')).catch((err)=>console.log(`DB connection error: ${err}`));
