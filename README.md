# Gestor de contraseñas

## Instalación

Para iniciar el proyecto necesitas tener instalado:
Node v18.18.0
PostgreSQL 16 con pgAdmin 4

1.- Clona el proyecto:
```git clone https://github.com/IgnacioValdc/MediApp---Servidor```

2.- Restaurar la base de datos

La base de datos se encuentra en la carpeta BD

Puedes descargar el instalador para windows: ```https://www.postgresql.org/download/windows/```

Los datos que debes ingresar seran:

```Usuario: postgres```
```Password: ClaveBase2000```

Eres libre de cambiar estos datos, pero si lo haces deberas cambiarlos tambien en la configuración del servidor.

Una vez instalado postgreSQL, abrimos pgAdmin 4.

Cuando ya este abierto creamos una conexion en server => register => Server.

En la pestaña general nos solicitara lo siguiente:

```nombre de conexion: prueba (puede ser cualquiera)```

Luego en la pestaña Conexion:
````nombre/Direccion de servidor: localhost```
```Contraseña: ClaveBase2000```

Guardamos.

Posteriormente en la conexion presionamos boton derecho => crear => Base de Datos

Nos pedira solo un nombre: ```Base de Datos: MediApp```
Guardamos.

Cuando esta base este creada, presionamos boton derecho sobre la base y ponemos restore, seleccionamos la base en la carpeta BD y restore.

Con esto la base estara lista.

Problemas:
Si no les permite restaurar deberan ir a file => prefences => paths
En EDB Advanced Server Binary Path y ostgreSQL Binary Path  => buscar la ruta => C:\Program Files\PostgreSQL\16\bin
y dejarlas seleccionadas.

Guardamos

2.- Abre una terminal en el directorio e instala las dependencias:
```npm install```

Si no tienes instalado node puedes descargarlo desde: ```https://nodejs.org/en```

Te recomiendo instalar choco (viene en la instalación de node), esto para no tener problemas con el programa cliente

3.- En la raiz inicia el proyecto:
```node index.js```

## Funciones
Es un servidor REST que permite conectarse con la base de datos y servir los datos a un cliente
Tienes el proyecto cliente en el siguiente link: https://github.com/IgnacioValdc/MediApp---Cliente
