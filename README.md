Discord Bot - Vinculación de Usuario y Email

Este proyecto consiste en un bot de Discord diseñado para ayudar a los nuevos miembros a vincular su username con su correo electrónico. Además, proporciona instrucciones claras para guiar a los usuarios en el proceso de registro, y permite a los administradores gestionar comandos de barra y responder a menciones.
Objetivo

El bot tiene como objetivo facilitar la gestión de nuevos miembros dentro de un servidor de Discord, asegurando que los usuarios puedan vincular su cuenta correctamente y recibir asistencia de forma rápida y automatizada. Este es un primer paso hacia un proyecto más ambicioso, que involucra la creación de un sistema para gestionar equipos y usuarios dentro de un servidor grande.
Funcionalidades

    Bienvenida al nuevo miembro: Cuando un miembro se une al servidor, el bot le da la bienvenida y le ofrece ayuda para vincular su username.

    Comando /ayuda: Proporciona una serie de pasos detallados para que los usuarios puedan completar el registro y vinculación de su correo con su username.

    Respuesta a menciones: Si el bot es mencionado, responde con una guía básica sobre cómo proceder.

Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

    Node.js (versión 16 o superior).

    Un token de Discord y ID de la aplicación. Puedes obtenerlos creando una aplicación en el Portal de desarrolladores de Discord.

Instalación

    Clona este repositorio a tu máquina local:

git clone https://github.com/tu-usuario/discord-bot.git
cd discord-bot

Instala las dependencias del proyecto:

npm install

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

DISCORD_TOKEN=tu_token_aqui
APPLICATION_ID=tu_id_de_aplicacion_aqui
CANAL_BIENVENIDA_ID=el_id_del_canal_de_bienvenida

Ejecuta el bot:

    node index.js

    Deberías ver un mensaje en la consola como ✅ Bot conectado como [tu_bot], lo que significa que el bot se está ejecutando correctamente.

Desarrollo

Si deseas contribuir al proyecto, sigue estos pasos:

    Haz un fork del repositorio.

    Crea una nueva rama para desarrollar tus cambios:

git checkout -b nueva-caracteristica

Realiza tus cambios y asegúrate de que todo funcione correctamente.

Sube tus cambios a tu repositorio remoto:

    git push origin nueva-caracteristica

    Abre un pull request para que los cambios sean revisados y fusionados.

Estructura del Proyecto

    index.js: El archivo principal que contiene la lógica del bot.

    .env: Archivo de configuración para las variables de entorno.

    package.json: Contiene la configuración y las dependencias del proyecto.

Contribuciones

Este proyecto está abierto a mejoras y nuevas funcionalidades. Si tienes una idea o mejora, no dudes en contribuir. Asegúrate de seguir las mejores prácticas para el control de versiones y realizar pull requests claros y bien documentados.