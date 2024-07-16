const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const port=5000;
app.use(cors());
app.use(bodyParser.json());

let events = [
    { id: 1, date: '2024-07-16', name: 'Affordmed OA', time: '6.30 PM', description: 'N/A' },
    { id: 2, date: '2024-07-01', name: 'Event 2', time: '2:00 PM', description: 'Description of Event 2' },
    { id: 3, date: '2024-07-03', name: 'Event 3', time: '11:30 AM', description: 'Description of Event 3' },
];

app.get('/events',(req,res)=>{
    res.json(events);
});

app.post('/events',(req,res)=>{
    const event=req.body;
    event.id=events.length+1;
    events.push(event);
    res.status(201).json(event);
});

app.put('/events/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedEvent = req.body;
    events = events.map(event => event.id === id ? { ...event, ...updatedEvent } : event);
    res.json(updatedEvent);
  });
  
  app.delete('/events/:id', (req, res) => {
    const id = parseInt(req.params.id);
    events = events.filter(event => event.id !== id);
    res.status(204).end();
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });


