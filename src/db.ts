import dotenv from "dotenv";
import { Client} from "pg"
dotenv.config()

export const client = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false, // Required for Neon.tech
  },
})

client.connect()
.then(()=>{
    console.log("you succesfully coonected with database")
})
.catch(err=>{
console.log("you failed to connect with data ",err)
})
console.log("ENV:", process.env.DATABASE_URL);
