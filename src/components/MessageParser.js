class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("ki khobor")) {
      this.actionProvider.greetassamese();
    }
  }
}

export default MessageParser;
