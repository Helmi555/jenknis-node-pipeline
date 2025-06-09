const express = require('express');
const app = express();

const todolist=[{time:"9:00",todo:"Work"},
    {time:"18:00",todo:"Gaming"},
    {time:"22:30",todo:"Go Out"},
]

app.get('/ok1', (req, res) => res.status(200).send('OK1 is good'));
app.get('/ok2', (req, res) => res.status(200).send('OK2 is working'));
app.get('/fail', (req, res) => res.status(500).send('Oops! Something went wrong'));
app.get('/todo',(req,res)=>{
  res.status(200).json(todolist);

})

if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app; // 👈 export app for testing
