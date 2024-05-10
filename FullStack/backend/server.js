import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//   res.send("<h1>Server Is Ready</h1>");
// });

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Elevator",
      content:
        "Why don't skeletons fight each other? They don't have the guts.",
    },
    {
      id: 2,
      title: "The Mathematician",
      content: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 3,
      title: "The Comedian",
      content:
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 4,
      title: "The Ice Cream",
      content:
        "Why did the ice cream truck break down? Because of the rocky road.",
    },
    {
      id: 5,
      title: "The Plants",
      content:
        "I told my plants a joke to make them grow. It was a corny joke, but they laughed.",
    },
    {
      id: 6,
      title: "The Ghost",
      content:
        "Why did the ghost go to the party? Because he heard it was going to be a 'boo' last.",
    },
    {
      id: 7,
      title: "The Clock",
      content:
        "What did the big hand say to the little hand? You're just a minute!",
    },
    {
      id: 8,
      title: "The Pirate",
      content:
        "Why couldn't the pirate play cards? Because he was standing on the deck!",
    },
    {
      id: 9,
      title: "The Tomato",
      content:
        "Why was the tomato blushing? Because it saw the salad dressing!",
    },
    {
      id: 10,
      title: "The Banana",
      content:
        "Why did the banana go to the doctor? Because it wasn't peeling well.",
    },
    {
      id: 11,
      title: "The Musician",
      content:
        "Why did the musician break up with his metronome? It was just too controlling!",
    },
    {
      id: 12,
      title: "The Tree",
      content: "Why did the tree go to the dentist? To get a root canal!",
    },
    {
      id: 13,
      title: "The Bee",
      content: "What do you call a bee that can't make up its mind? A maybee!",
    },
    {
      id: 14,
      title: "The Train",
      content:
        "Why don't trains ever get lost? Because they always know their tracks!",
    },
    {
      id: 15,
      title: "The Basketball",
      content:
        "Why did the basketball player go to jail? Because he shot the ball!",
    },
    {
      id: 16,
      title: "The Photographer",
      content: "Why was the photographer arrested? Because he was framed!",
    },
    {
      id: 17,
      title: "The Beekeeper",
      content:
        "What did the beekeeper say to his bees when he got back from vacation? 'Hive missed you!'",
    },
    {
      id: 18,
      title: "The Computer",
      content: "Why was the computer cold? It left its Windows open!",
    },
    {
      id: 19,
      title: "The Mountain",
      content: "What did one mountain say to the other mountain? 'Hi Cliff!'",
    },
    {
      id: 20,
      title: "The Sandwich",
      content: "Why did the sandwich go to the gym? It wanted to be a panini!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`server listening on ${port}`);
});