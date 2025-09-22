"use client"

import { useState, useEffect, useRef } from "react"

// Generic hover code popover with typing and output for multiple languages
export default function CodeHover({
  children,
  lang = "c",
  position = "top",
  charsPerTick = 3,
  intervalMs = 18,
  outputDelayMs = 150,
}) {
  const [hovering, setHovering] = useState(false)
  const [count, setCount] = useState(0)
  const [showOutput, setShowOutput] = useState(false)
  const timerRef = useRef(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detect touch devices
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const PRESETS = {
    c: {
      label: "C",
      tokens: [
        { t: "#include", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "<stdio.h>", c: "text-sky-300" },
        { t: "\n", c: "" },
        { t: "int", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "main", c: "text-emerald-400" },
        { t: "()", c: "text-zinc-300" },
        { t: " ", c: "" },
        { t: "{", c: "text-zinc-300" },
        { t: "\n    ", c: "" },
        { t: "printf", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\\n\"", c: "text-amber-300" },
        { t: ")", c: "text-zinc-300" },
        { t: ";", c: "text-zinc-300" },
        { t: "\n    ", c: "" },
        { t: "return", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "0", c: "text-pink-300" },
        { t: ";", c: "text-zinc-300" },
        { t: "\n", c: "" },
        { t: "}", c: "text-zinc-300" },
        { t: "\n", c: "" },
      ],
      output: "hey, there aditya here.",
    },
    arduino: {
      label: "Arduino",
      tokens: [
        { t: "void setup() {\n  ", c: "text-zinc-300" },
        { t: "Serial.begin", c: "text-emerald-400" },
        { t: "(9600);\n}", c: "text-zinc-300" },
        { t: "\nvoid loop() {\n  ", c: "text-zinc-300" },
        { t: "Serial.println", c: "text-emerald-400" },
        { t: "(\"hey, there aditya here.\");\n  ", c: "text-amber-300" },
        { t: "delay(1000);\n}", c: "text-zinc-300" },
      ],
      output: "Serial: hey, there aditya here.",
    },
    iot: {
      label: "Raspberry Pi",
      tokens: [
        { t: "import ", c: "text-purple-400" },
        { t: "RPi.GPIO as GPIO\n", c: "text-emerald-400" },
        { t: "from ", c: "text-purple-400" },
        { t: "time ", c: "text-emerald-400" },
        { t: "import ", c: "text-purple-400" },
        { t: "sleep\n", c: "text-emerald-400" },
        { t: "GPIO.setmode(GPIO.BCM)\nGPIO.setup(18, GPIO.OUT)\n", c: "text-zinc-300" },
        { t: "GPIO.output(18, True)\n", c: "text-zinc-300" },
        { t: "print", c: "text-emerald-400" },
        { t: "(\"hey, there aditya here.\")\n", c: "text-amber-300" },
        { t: "sleep(1); GPIO.output(18, False)\n", c: "text-zinc-300" },
      ],
      output: "LED blinked • hey, there aditya here.",
    },
    discord: {
      label: "Discord Bot Dev",
      tokens: [
        { t: "# scopes & invite\n", c: "text-zinc-500" },
        { t: "https://discord.com/api/oauth2/authorize?client_id=", c: "text-zinc-300" },
        { t: "123", c: "text-emerald-400" },
        { t: "&scope=bot+applications.commands&permissions=8\n", c: "text-zinc-300" },
        { t: "# webhooks\n", c: "text-zinc-500" },
        { t: "POST /api/webhooks/{id}/{token}\n", c: "text-zinc-300" },
      ],
      output: "Invite URL generated.",
    },
    discordjs: {
      label: "Discord.js",
      tokens: [
        { t: "import ", c: "text-purple-400" },
        { t: "{ Client, GatewayIntentBits } ", c: "text-emerald-400" },
        { t: "from 'discord.js'\n", c: "text-amber-300" },
        { t: "const client = new Client({ intents: [GatewayIntentBits.Guilds] })\n", c: "text-zinc-300" },
        { t: "client.on('ready', () => console.log(", c: "text-zinc-300" },
        { t: "'hey, there aditya here.'", c: "text-amber-300" },
        { t: "))\nclient.login('TOKEN')\n", c: "text-zinc-300" },
      ],
      output: "Bot online • slash commands ready.",
    },
    discordpy: {
      label: "Discord.py",
      tokens: [
        { t: "import ", c: "text-purple-400" },
        { t: "discord\n", c: "text-emerald-400" },
        { t: "from ", c: "text-purple-400" },
        { t: "discord.ext ", c: "text-emerald-400" },
        { t: "import ", c: "text-purple-400" },
        { t: "commands\n", c: "text-emerald-400" },
        { t: "bot = commands.Bot(command_prefix='!')\n", c: "text-zinc-300" },
        { t: "@bot.command()\nasync def hi(ctx):\n    await ctx.send(", c: "text-zinc-300" },
        { t: "'hey, there aditya here.'", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
        { t: "bot.run('TOKEN')\n", c: "text-zinc-300" },
      ],
      output: "Message sent to #general.",
    },
    linux: {
      label: "Linux",
      tokens: [
        { t: "# list and read\n", c: "text-zinc-500" },
        { t: "ls -1\n", c: "text-zinc-300" },
        { t: "echo ", c: "text-emerald-400" },
        { t: "'hey, there aditya here.'\n", c: "text-amber-300" },
        { t: "cat README.md\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    git: {
      label: "Git",
      tokens: [
        { t: "git init\n", c: "text-zinc-300" },
        { t: "git add ", c: "text-zinc-300" },
        { t: ".\n", c: "text-zinc-300" },
        { t: "git commit -m ", c: "text-zinc-300" },
        { t: "'hey, there aditya here.'\n", c: "text-amber-300" },
      ],
      output: "hey, there aditya here.",
    },
    vscode: {
      label: "VS Code",
      tokens: [
        { t: "// launch workspace\n", c: "text-zinc-500" },
        { t: "code ", c: "text-emerald-400" },
        { t: ".\n", c: "text-zinc-300" },
        { t: "// settings sync\n", c: "text-zinc-500" },
        { t: "{\n  \"editor.fontLigatures\": true\n}\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    docker: {
      label: "Docker",
      tokens: [
        { t: "docker build ", c: "text-zinc-300" },
        { t: "-t app:dev ", c: "text-emerald-400" },
        { t: ".\n", c: "text-zinc-300" },
        { t: "docker run ", c: "text-zinc-300" },
        { t: "--rm -p 3000:3000 app:dev\n", c: "text-emerald-400" },
        { t: "# logs\n", c: "text-zinc-500" },
        { t: "docker logs -f ", c: "text-zinc-300" },
        { t: "$(docker ps -lq)\n", c: "text-emerald-400" },
      ],
      output: "hey, there aditya here.",
    },
    firebase: {
      label: "Firebase",
      tokens: [
        { t: "firebase login\n", c: "text-zinc-300" },
        { t: "firebase init hosting\n", c: "text-zinc-300" },
        { t: "firebase deploy\n", c: "text-zinc-300" },
        { t: "echo ", c: "text-emerald-400" },
        { t: "'hey, there aditya here.'\n", c: "text-amber-300" },
      ],
      output: "hey, there aditya here.",
    },
    aws: {
      label: "AWS",
      tokens: [
        { t: "aws s3 mb s3://my-bucket\n", c: "text-zinc-300" },
        { t: "aws s3 cp ", c: "text-zinc-300" },
        { t: "index.html ", c: "text-emerald-400" },
        { t: "s3://my-bucket/\n", c: "text-zinc-300" },
        { t: "aws cloudfront create-invalidation --paths /*\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    vercel: {
      label: "Vercel",
      tokens: [
        { t: "vercel login\n", c: "text-zinc-300" },
        { t: "vercel init\n", c: "text-zinc-300" },
        { t: "vercel deploy ", c: "text-zinc-300" },
        { t: "--prod\n", c: "text-emerald-400" },
      ],
      output: "hey, there aditya here.",
    },
    apple: {
      label: "Apple",
      tokens: [
        { t: "# macOS dev tools\n", c: "text-zinc-500" },
        { t: "xcode-select --install\n", c: "text-zinc-300" },
        { t: "# tweak defaults\n", c: "text-zinc-500" },
        { t: "defaults write -g ApplePressAndHoldEnabled -bool false\n", c: "text-zinc-300" },
        { t: "echo ", c: "text-emerald-400" },
        { t: "'hey, there aditya here.'\n", c: "text-amber-300" },
      ],
      output: "hey, there aditya here.",
    },
    cpp: {
      label: "C++",
      tokens: [
        { t: "#include", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "<iostream>", c: "text-sky-300" },
        { t: "\n", c: "" },
        { t: "int", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "main", c: "text-emerald-400" },
        { t: "()", c: "text-zinc-300" },
        { t: " ", c: "" },
        { t: "{", c: "text-zinc-300" },
        { t: "\n    ", c: "" },
        { t: "std::cout", c: "text-emerald-400" },
        { t: " << ", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\\n\"", c: "text-amber-300" },
        { t: ";", c: "text-zinc-300" },
        { t: "\n    ", c: "" },
        { t: "return 0;", c: "text-zinc-300" },
        { t: "\n", c: "" },
        { t: "}", c: "text-zinc-300" },
        { t: "\n", c: "" },
      ],
      output: "hey, there aditya here.",
    },
    java: {
      label: "Java",
      tokens: [
        { t: "public", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "class", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "Main", c: "text-emerald-400" },
        { t: " {\n    ", c: "" },
        { t: "public", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "static", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "void", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "main", c: "text-emerald-400" },
        { t: "(String[] args)", c: "text-zinc-300" },
        { t: " {\n        ", c: "" },
        { t: "System.out.println", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")", c: "text-zinc-300" },
        { t: ";\n    }\n}", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    python: {
      label: "Python",
      tokens: [
        { t: "print", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    javascript: {
      label: "JavaScript",
      tokens: [
        { t: "console", c: "text-emerald-400" },
        { t: ".", c: "text-zinc-300" },
        { t: "log", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")", c: "text-zinc-300" },
        { t: ";\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    typescript: {
      label: "TypeScript",
      tokens: [
        { t: "const", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "msg", c: "text-emerald-400" },
        { t: ": string = ", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ";\n", c: "text-zinc-300" },
        { t: "console", c: "text-emerald-400" },
        { t: ".", c: "text-zinc-300" },
        { t: "log", c: "text-emerald-400" },
        { t: "(msg);\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    rust: {
      label: "Rust",
      tokens: [
        { t: "fn", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "main", c: "text-emerald-400" },
        { t: "() {\n    ", c: "text-zinc-300" },
        { t: "println!", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ");\n}", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    go: {
      label: "Go",
      tokens: [
        { t: "package", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "main\n", c: "text-emerald-400" },
        { t: "import", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "\"fmt\"\n", c: "text-amber-300" },
        { t: "func", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "main() {\n    ", c: "text-zinc-300" },
        { t: "fmt.Println", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n}", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    html: {
      label: "HTML5",
      tokens: [
        { t: "<", c: "text-zinc-400" },
        { t: "p", c: "text-purple-300" },
        { t: ">", c: "text-zinc-400" },
        { t: "hey, there aditya here.", c: "text-zinc-200" },
        { t: "</", c: "text-zinc-400" },
        { t: "p", c: "text-purple-300" },
        { t: ">\n", c: "text-zinc-400" },
      ],
      output: "hey, there aditya here.",
    },
    css: {
      label: "CSS3",
      tokens: [
        { t: ".greet::after", c: "text-emerald-300" },
        { t: " {\n  ", c: "text-zinc-300" },
        { t: "content", c: "text-purple-300" },
        { t: ": ", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ";\n}", c: "text-zinc-300" },
        { t: "\n", c: "" },
      ],
      output: "hey, there aditya here.",
    },
    bootstrap: {
      label: "Bootstrap",
      tokens: [
        { t: "<", c: "text-zinc-400" },
        { t: "div", c: "text-purple-300" },
        { t: " class=\"alert alert-primary\"", c: "text-emerald-300" },
        { t: ">", c: "text-zinc-400" },
        { t: "hey, there aditya here.", c: "text-zinc-200" },
        { t: "</", c: "text-zinc-400" },
        { t: "div", c: "text-purple-300" },
        { t: ">\n", c: "text-zinc-400" },
      ],
      output: "hey, there aditya here.",
    },
    react: {
      label: "React",
      tokens: [
        { t: "function", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "App", c: "text-emerald-400" },
        { t: "() {\n  ", c: "text-zinc-300" },
        { t: "return", c: "text-purple-400" },
        { t: " (\n    ", c: "text-zinc-300" },
        { t: "<span className=\"text-emerald-300\">", c: "text-zinc-400" },
        { t: "hey, there aditya here.", c: "text-zinc-200" },
        { t: "</span>", c: "text-zinc-400" },
        { t: "\n  );\n}", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    tailwind: {
      label: "Tailwind",
      tokens: [
        { t: "<", c: "text-zinc-400" },
        { t: "div", c: "text-purple-300" },
        { t: " class=\"text-emerald-400 font-medium\"", c: "text-emerald-300" },
        { t: ">", c: "text-zinc-400" },
        { t: "hey, there aditya here.", c: "text-zinc-200" },
        { t: "</", c: "text-zinc-400" },
        { t: "div", c: "text-purple-300" },
        { t: ">\n", c: "text-zinc-400" },
      ],
      output: "hey, there aditya here.",
    },
    nextjs: {
      label: "Next.js",
      tokens: [
        { t: "export default function", c: "text-purple-400" },
        { t: " ", c: "" },
        { t: "Page", c: "text-emerald-400" },
        { t: "() {\n  ", c: "text-zinc-300" },
        { t: "return (\n    ", c: "text-zinc-300" },
        { t: "<p>", c: "text-zinc-400" },
        { t: "hey, there aditya here.", c: "text-zinc-200" },
        { t: "</p>", c: "text-zinc-400" },
        { t: "\n  );\n}", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    prisma: {
      label: "Prisma",
      tokens: [
        { t: "import", c: "text-purple-400" },
        { t: " { PrismaClient } ", c: "text-zinc-300" },
        { t: "from", c: "text-purple-400" },
        { t: " '@prisma/client'\n", c: "text-amber-300" },
        { t: "const", c: "text-purple-400" },
        { t: " prisma = new PrismaClient()\n", c: "text-zinc-300" },
        { t: "console.log", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    node: {
      label: "Node.js",
      tokens: [
        { t: "console", c: "text-emerald-400" },
        { t: ".", c: "text-zinc-300" },
        { t: "log", c: "text-emerald-400" },
        { t: "(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    express: {
      label: "Express.js",
      tokens: [
        { t: "import", c: "text-purple-400" },
        { t: " express ", c: "text-zinc-300" },
        { t: "from", c: "text-purple-400" },
        { t: " 'express'\n", c: "text-amber-300" },
        { t: "const app = express()\n", c: "text-zinc-300" },
        { t: "app.get('/', (req, res) => res.send(", c: "text-zinc-300" },
        { t: "'hey, there aditya here.'", c: "text-amber-300" },
        { t: "))\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    mongodb: {
      label: "MongoDB",
      tokens: [
        { t: "// insert + fetch\n", c: "text-zinc-500" },
        { t: "await ", c: "text-zinc-300" },
        { t: "db", c: "text-emerald-400" },
        { t: ".collection(\"greet\").insertOne({ msg: ", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: " })\n", c: "text-zinc-300" },
        { t: "const doc = await db.collection(\"greet\").findOne({})\n", c: "text-zinc-300" },
        { t: "console.log(doc.msg)\n", c: "text-emerald-400" },
      ],
      output: "hey, there aditya here.",
    },
    mysql: {
      label: "MySQL",
      tokens: [
        { t: "-- insert + query\n", c: "text-zinc-500" },
        { t: "INSERT INTO greetings(msg) VALUES (", c: "text-zinc-300" },
        { t: "'hey, there aditya here.'", c: "text-amber-300" },
        { t: ");\n", c: "text-zinc-300" },
        { t: "SELECT msg FROM greetings ORDER BY id DESC LIMIT 1;\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    postgresql: {
      label: "PostgreSQL",
      tokens: [
        { t: "-- insert + query\n", c: "text-zinc-500" },
        { t: "INSERT INTO greetings(msg) VALUES (", c: "text-zinc-300" },
        { t: "'hey, there aditya here.'", c: "text-amber-300" },
        { t: ") RETURNING id;\n", c: "text-zinc-300" },
        { t: "SELECT msg FROM greetings ORDER BY id DESC LIMIT 1;\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    sklearn: {
      label: "scikit-learn",
      tokens: [
        { t: "from ", c: "text-purple-400" },
        { t: "sklearn.linear_model ", c: "text-emerald-400" },
        { t: "import ", c: "text-purple-400" },
        { t: "LogisticRegression\n", c: "text-emerald-400" },
        { t: "from ", c: "text-purple-400" },
        { t: "sklearn.feature_extraction.text ", c: "text-emerald-400" },
        { t: "import ", c: "text-purple-400" },
        { t: "CountVectorizer\n", c: "text-emerald-400" },
        { t: "vec = CountVectorizer().fit([", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: "])\n", c: "text-zinc-300" },
        { t: "X = vec.transform([", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: "])\n", c: "text-zinc-300" },
        { t: "clf = LogisticRegression().fit(X, [1])\n", c: "text-zinc-300" },
        { t: "print(", c: "text-emerald-400" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    transformers: {
      label: "Transformers",
      tokens: [
        { t: "from ", c: "text-purple-400" },
        { t: "transformers ", c: "text-emerald-400" },
        { t: "import ", c: "text-purple-400" },
        { t: "pipeline\n", c: "text-emerald-400" },
        { t: "nlp = pipeline(", c: "text-zinc-300" },
        { t: "\"sentiment-analysis\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
        { t: "res = nlp(", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
        { t: "print(", c: "text-emerald-400" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    tensorflow: {
      label: "TensorFlow",
      tokens: [
        { t: "import ", c: "text-purple-400" },
        { t: "tensorflow ", c: "text-emerald-400" },
        { t: "as ", c: "text-purple-400" },
        { t: "tf\n", c: "text-emerald-400" },
        { t: "x = tf.constant([", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: "])\n", c: "text-zinc-300" },
        { t: "print(", c: "text-emerald-400" },
        { t: "x.numpy()[0]", c: "text-zinc-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    pytorch: {
      label: "PyTorch",
      tokens: [
        { t: "import ", c: "text-purple-400" },
        { t: "torch\n", c: "text-emerald-400" },
        { t: "t = torch.tensor([", c: "text-zinc-300" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: "])\n", c: "text-zinc-300" },
        { t: "print(", c: "text-emerald-400" },
        { t: "t[0].item()", c: "text-zinc-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
    opencv: {
      label: "OpenCV",
      tokens: [
        { t: "import ", c: "text-purple-400" },
        { t: "cv2\n", c: "text-emerald-400" },
        { t: "img = cv2.imread(", c: "text-zinc-300" },
        { t: "\"photo.jpg\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
        { t: "gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n", c: "text-zinc-300" },
        { t: "print(", c: "text-emerald-400" },
        { t: "\"hey, there aditya here.\"", c: "text-amber-300" },
        { t: ")\n", c: "text-zinc-300" },
      ],
      output: "hey, there aditya here.",
    },
  }

  const preset = PRESETS[lang] || PRESETS.c
  const tokens = preset.tokens
  const label = preset.label
  const outputText = preset.output

  const fullLength = tokens.reduce((n, tok) => n + tok.t.length, 0)

  useEffect(() => {
    if (hovering) {
      timerRef.current = setInterval(() => {
        setCount((c) => Math.min(c + charsPerTick, fullLength))
      }, intervalMs)
    } else {
      clearInterval(timerRef.current)
      setCount(0)
      setShowOutput(false)
    }
    return () => clearInterval(timerRef.current)
  }, [hovering, fullLength, charsPerTick, intervalMs])

  useEffect(() => {
    if (!hovering) return
    if (count >= fullLength) {
      const t = setTimeout(() => setShowOutput(true), outputDelayMs)
      return () => clearTimeout(t)
    }
  }, [count, fullLength, hovering, outputDelayMs])

  let remaining = count
  const rendered = tokens.map((tok, idx) => {
    if (remaining <= 0) return <span key={idx} className={tok.c}></span>
    const take = Math.min(remaining, tok.t.length)
    remaining -= take
    return (
      <span key={idx} className={tok.c}>
        {tok.t.slice(0, take)}
      </span>
    )
  })

  const posClasses = position === "top"
    ? "bottom-full left-1/2 -translate-x-1/2 mb-3"
    : "top-full left-1/2 -translate-x-1/2 mt-3"

  const statusText = count >= fullLength ? 'done' : 'typing…'

  // For touch devices, we might want to show the popup on click instead of hover
  const handleInteraction = () => {
    if (isTouchDevice) {
      setHovering(!hovering)
    }
  }

  return (
    <div
      className="relative group inline-flex"
      onMouseEnter={() => !isTouchDevice && setHovering(true)}
      onMouseLeave={() => !isTouchDevice && setHovering(false)}
      onClick={handleInteraction}
      data-no-letter
    >
      {children}
      {hovering && (
        <div className={`absolute ${posClasses} z-50`} aria-hidden="true">
          <div className="w-[340px] max-w-[90vw] rounded-lg border border-zinc-700 bg-zinc-900/95 shadow-xl backdrop-blur px-4 py-3 animate-fade-in-up">
            <div className="text-xs text-zinc-400 mb-2 font-mono">{label} • {statusText}</div>
            <pre className="text-[12px] leading-5 text-zinc-200 font-mono whitespace-pre-wrap break-all max-h-[40vh] overflow-auto pr-1">
              {rendered}
              {count < fullLength && <span className="inline-block w-2 h-4 bg-zinc-200 align-baseline ml-0.5 animate-pulse" />}
            </pre>
            <div className="mt-3 border-t border-zinc-700 pt-2">
              <div className="text-[11px] text-zinc-400 font-mono mb-1">Output</div>
              <div className="text-[12px] font-mono text-emerald-300 break-words">
                {showOutput ? outputText : <span className="text-zinc-500">(waiting...)</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}