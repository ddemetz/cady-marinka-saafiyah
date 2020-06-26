const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text:
      "You are at school one day looking around. You notice Paul on his phone texting someone. Probably a girl you think to yourself. Paul is always flirting with someone. You then look at Olivia who looks distracted and keeps staring out the window, usually she is with Alice you think, suprised that she isn't. So then you look at Sabrina who is the other person that is always with Alice. She was also suprisingly enough, not with Alice. You then look at Brad who is talking with Tori. It would be very suprising if he knew where Alice was, he broke up with her. And it would be strange if he was hanging out with her. You then looked at Tori laughing a little at the thought of her knowing where Alice is. She hated Alice. You need to talk to Alice today, so you decide to talk to someone about where Alice is. You also look at your phone wondering if Grace, Alice's sister would know where she is. Who do you choose to ask about Alice?",
    options: [
      {
        text: "Talk to Grace",
        nextText: 2
      },
      {
        text: "Talk to Olivia",
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text:
      "You decide to text Grace! You read through the texts, it was good that Grace texted so quickly, but sadly she didn't know where Alice was. You decide to talk to another person.",
    options: [
      {
        text: "Talk to Olivia",
        nextText: 3
      },
      {
        text: "Talk to Brad",
        nextText: 4
      },
      {
        text: "Talk to Paul",
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text:
      "You decide to talk to Olivia. Olivia smiles at you 'Hey' she says before you can say anything. You smile back and say 'Hi'. You then ask about Alice and she frowns We were supposed to hang out last night, but she decided to never show up You nod slowly and decide to talk with soemeone else.",
    options: [
      {
        text: "Talk to Sabrina",
        nextText: 6
      },
      {
        text: "Talk to Brad",
        nextText: 4
      },
      {
        text: "Talk to Paul",
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text:
      "You decide to talk to Brad next! Brad looks at you his face going from nuetral to Angry as you bring up Alice. He shakes his head 'I don't know where she is, and why should I?'' He said his voice a growl. You then have to go to your seat because your class is starting. After class your teacher asks you to take some homework to Alice. You go to her house after school and knock at the door and no one answers you sigh and wait a moment the knock again. You decide to text Grace. You get the door open and yell 'Hello! Alice? I have homework for you, and we need to talk about the project' You yell with no response. You then go upstairs and knock at her bedroom door. Again no response you open it and scream. Alice is in there...but Alice is not alive! You stare at her, she had been stabbed, and killed. You call 911 and everything happens so quickly. But there is one thought that keeps getting repeated in your head Alice is dead, and someone killed her. You know you have to figure it who it is. You go home that night and decide to...",
    options: [
      {
        text: "Check Through Instagram",
        nextText: 7
      },
      {
        text: "Text Someone",
        nextText: 8
      }
    ]
  },
  {
    id: 5,
    text:
      "You decide to talk to Paul! You walk up to Paul and Paul looks up from his phone. He nods to you 'Whats up?' he asks. You ask if he knows where Alice is and he laughs 'I wish, but sadly know. It has been 6 1/2 hours since she was active on Instagram and 9 hours since she has been active on Facebook, don't aks me how I know that' You stare at him confused and decide to talk to another person. ",
    options: [
      {
        text: "Talk to Sabrina",
        nextText: 6
      },
      {
        text: "Talk to Brad",
        nextText: 4
      }
    ]
  },
  {
    id: 6,
    text:
      "You decide to talk to Sabrina next! Sabrina waves at you as you walk over to her. You ask her if she knows anything about Alice and she shakes her head 'She hasn't been answering my texts' she rolls her eyes 'I know what you are thinking, I am her best friend I should know these things!'' She pouts a little. You can tell that Olivia heard all of this and Olivia looks hurt. You then have to go to your seat because your class is starting. After class your teacher asks you to take some homework to Alice. You go to her house after school and knock at the door and no one answers you sigh and wait a moment the knock again. You decide to text Grace. You get the door open and yell 'Hello! Alice? I have homework for you, and we need to talk about the project' You yell with no responce. You then go upstairs and knock at her bedroom door. Again no responce you open it and scream. Alice is in there...but Alice is not alive! You stare at her, she had been stabbed, and killed. You call 911 and everything happens so quickly. But there is one thought that keeps getting repeated in your head Alice is dead, and someone killed her. You know you have to figure ut who it is. You go home that night and decide to...",
    options: [
      {
        text: "Check Through Instagram",
        nextText: 7
      },
      {
        text: "Text Someone",
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: "You go onto Instagram and decide between...",
    options: [
      {
        text: "Look through stories",
        nextText: 9
      },
      {
        text: "Check your DMs",
        nextText: 10
      },
      {
        text: "Look through your feed",
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: "You go onto your texts and decide between...",
    options: [
      {
        text: "Text Grace",
        nextText: 12
      },
      {
        text: "Text Olivia",
        nextText: 13
      },
      {
        text: "Text Sabrina",
        nextText: 14
      }
    ]
  },
  {
    id: 9,
    text: "You look at who has a story you can...",
    options: [
      {
        text: "Look through Grace's story",
        nextText: 15
      },
      {
        text: "Look through Olivia's story",
        nextText: 16
      },
      {
        text: "Look through Sabrina's story",
        nextText: 17
      }
    ]
  },
  {
    id: 10,
    text:
      "You decide to check your dm's. You notice Paul is active now and Sabrina has sent you a message. Do you...?",
    options: [
      {
        text: "Text Paul",
        nextText: 18
      },
      {
        text: "Check what Sabrina messaged you",
        nextText: 19
      }
    ]
  },
  {
    id: 11,
    text:
      "As you look through your feed, you notice Paul is active now and Sabrina has sent you a message. You decide to... ",
    options: [
      {
        text: "Text Paul",
        nextText: 18
      },
      {
        text: "Check what Sabrina messaged you",
        nextText: 19
      }
    ]
  }
];

startGame();
