import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose.connect('mongodb+srv://laxmanhenricks94:dLm82A8jEFdMizwe@cluster0.s0yib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Database Connected');

  }).catch((err) => {
    console.log(`Error Occured on DB Connection=>${err} `);

  });
};


export default connectToDB;