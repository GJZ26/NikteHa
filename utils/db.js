import { connect, connection } from "mongoose";


const conn = {
    isConnected: false
}

export async function dbconnect() {
    if (conn.isConnected) return;
   const db =  await connect(process.env.MONGODB_URL)
   conn.isConnected = db.connections[0].readyState
}


connection.on("connected", ()=>{
    console.log('db connected')})
connection.on("error",(e)=>{
    console.log(e)
})
