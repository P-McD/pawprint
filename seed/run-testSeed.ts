import { testSeed } from "./testseed";


if (process.env.NODE_ENV === "test"){
testSeed().catch((err) => console.log('ERROR ENCOUNTERED >>>', err));}