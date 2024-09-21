// server.js
import express from 'express';
import { AccessToken } from "livekit-server-sdk";
import { RoomServiceClient, Room } from 'livekit-server-sdk';
import cors from 'cors';
import client from './database/dbConnection.js';
var totalUsers = [];

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;

const livekitHost = 'wss://test-et22r9u8.livekit.cloud';
const roomService = new RoomServiceClient(livekitHost, 'APISR9G848vteWP', 'RcaPTBbC1ee5nDURfHmcOmtSy6SZHdT7De5ddn3cDzeC');
  
const createToken = async () => {
    let roomName = 'quickstart-room';
  // If this room doesn't exist, it'll be automatically created when the first
  // client joins
  // if (totalUsers.length >= 2) {
  //   roomName = 'quickstart-room2';
  // }
  
  // roomName = await createRoom(roomName);
  // console.log(roomName);
  // Identifier to be used for participant.
  
    
  const participantName = "hello"+Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  const at = new AccessToken('APISR9G848vteWP', 'RcaPTBbC1ee5nDURfHmcOmtSy6SZHdT7De5ddn3cDzeC', {
    identity: participantName,
    // Token to expire after 10 minutes
    ttl: '1m',
  });
  totalUsers.push(participantName);
  at.addGrant({ roomJoin: true, room: roomName });

  return await at.toJwt();
}

const createRoom = async (name) => {
  const opts = {
    name: name,
    emptyTimeout: 10 , 
    maxParticipants: 20,
  };
  const room = await roomService.createRoom(opts);
  console.log('Room created', room); // Log inside to confirm room is created
  return room;

};

app.get('/getToken', async (req, res) => {

  res.send(await createToken());
});

app.post('/teacherSignUp', async(req, res) => {
  try{
    const body = req.body;

    if (body) {
      const query = `CREATE TABLE IF NOT EXISTS teachers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      role VARCHAR(10) NOT NULL,
      classes JSONB NULL
      )`

      await client.query(query);

      const query2 = await client.query(`INSERT INTO teachers (name, email, role,  classes) VALUES ($1, $2, $3, $4) RETURNING *`,
      [body.name, body.email, body.role, body.classes]);
      
      console.log(query2.rows[0].classes)
      res.status(200).send("table and record inserted in teacher table")
      
    }
    else{
      res.status(500).send("error occured");
    }
  }
  catch(err) {
    console.log(err)
    res.status(500).send("error occured")
  }
})

app.post('/studentSignUp', async(req, res) => {
  try {
    const body = req.body;
    if (body) {
      const query = `CREATE TABLE IF NOT EXISTS students (
      rollNumber INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      classes JSONB NULL
      )`

      await client.query(query);

      const query2 = await client.query(`INSERT INTO students (rollNumber, name, role, classes) VALUES ($1, $2, $3, $4) RETURNING *`,
      [body.rollNumber, body.name, body.role, body.classes]);
      
      console.log(query2)
      console.log(query2.rows[0].classes)
      res.status(200).send("table and record inserted in student table")
      
    }
    else{
      res.status(500).send("error occured");
    }
  }
  catch(err) {
    console.log(err)
    res.status(500).send("error occured")
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})