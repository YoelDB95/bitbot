import 'dotenv/config';
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

// Cargar comandos
const commandsPath = join(__dirname, 'commands');
const categorias = readdirSync(commandsPath);

for (const categoria of categorias) {
  const archivos = readdirSync(join(commandsPath, categoria)).filter(file => file.endsWith('.js'));
  for (const archivo of archivos) {
    const { default: comando } = await import(`./commands/${categoria}/${archivo}`);
    client.commands.set(comando.data.name, comando);
  }
}

// Cargar eventos
const eventsPath = join(__dirname, 'events');
const eventos = readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const archivo of eventos) {
  const { default: evento } = await import(`./events/${archivo}`);
  if (evento.once) {
    client.once(evento.name, (...args) => evento.execute(...args, client));
  } else {
    client.on(evento.name, (...args) => evento.execute(...args, client));
  }
}

client.login(process.env.DISCORD_TOKEN);
