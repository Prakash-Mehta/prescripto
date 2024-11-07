import mongoose from "mongoose";

const connectDB = async () => {
    try {  await mongoose.connect(`${process.env.MONGODB_URL}/prescripto` ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on('connected', () => console.log("Database Connected"));
} catch (error) {
    console.error("Database connection failed", error);
    process.exit(1); // Exit process with failure code
}
}

export default connectDB;








// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))
//     await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`)

// }

// export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.