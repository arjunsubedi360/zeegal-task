export function generateRandomMessage() {
    const phrases = [
      'Hello, World!',
      'This is a random message.',
      'Node.js is awesome!',
      'Lorem ipsum dolor sit amet.',
      'Random message generator.',
      'Keep it simple!',
    ];
  
    // Generate a random message from the phrases array
    const randomMessage = phrases[Math.floor(Math.random() * phrases.length)];
  
    // Generate a random priority between 1 and 10
    const randomPriority = Math.floor(Math.random() * 10) + 1;
  
    // Create the message object with timestamp and random priority
    const message = {
      message: randomMessage,
      timestamp: new Date().toISOString(),
      priority: randomPriority,
    };
  
    return message;
  }
  

  