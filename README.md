# backend-finanzauto

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Instrucciones para ejecutar el proyecto ](#2-Instrucciones-para-ejecutar-el-proyecto)
* [3. Acerca de dependencias ](#3-Acerca-de-dependencias)
* [4. Futuras mejoras ](#3-Futuras-mejoras)

***

## 1. Resumen del proyecto

Este backend es parte del proyecto [Detalle-finazautos](https://front-end-finanzauto.vercel.app/)
y está diseñado para recibir solicitudes de información
detallada sobre diferentes marcas de vehículos en el
sitio web Opinautos.

El sistema utiliza la API de scrapper [API scrapper](https://scrapper-service-auto.onrender.com/scrapper-service/Chevrolet%20Sail) para recopilar comentarios
sobre el modelo del vehículo. Luego, con la ayuda de inteligencia
artificial, procesa estos comentarios para generar resúmenes
concisos que destacan tanto los aspectos positivos como los
negativos de cada vehículo.

Cuando los comentarios están en inglés, el sistema los
traduce automáticamente para mantener la coherencia en un
solo idioma.

## 2. Instrucciones para ejecutar el proyecto

### 2.1 Consumir Api

1. Es muy fácil de usar:

Simplemente accede a la página

```text
https://backend-finanzauto.onrender.com/summary/
```

Luego, añade el nombre de la marca al final de la URL.

```text
https://backend-finanzauto.onrender.com/summary/Chevrolet%20Sail
```

### 2.2 Ejecutar localmente
## Requisitos previos

1. **Node.js**: Asegúrate de tener Node.js instalado en tu máquina.

2. **Dependencias del proyecto**: Instala las dependencias del proyecto utilizando npm o yarn. Ejecuta el siguiente comando en la raíz del proyecto:

   ```bash
   npm install cors
   npm install express --save
   npm install @huggingface/inference
   npm install dotenv
   ```
3. **Configuración del archivo .env**
   
    Para ejecutar la API localmente, es necesario crear un archivo .env
    en la raíz del proyecto con la siguiente estructura:

   ```bash
   TOKEN=<tu_token_aquí>
   ```
4. **Generación de Token**: Para generar un token en Hugging Face, primero inicia sesión en huggingface.co [huggingface](https://huggingface.co/)
  y accede a la configuración de tu cuenta haciendo clic en tu avatar en la esquina
  superior derecha y seleccionando "Settings". En la página de configuración, busca
  la sección "Access Tokens" en el menú lateral y haz clic en "New token" para crear
  uno nuevo. Asigna un nombre al token, selecciona el nivel de permisos necesario, 
  y haz clic en "Generate". Asegúrate de copiar y guardar el token en un lugar seguro,
  ya que no podrás verlo nuevamente después de crearlo.


5. **Ejecución**: Una vez que el archivo .env esté configurado, puedes ejecutar la API 
  localmente utilizando el siguiente comando:

  ```bash
   node index.js
   ```
   
## 3. Acerca de dependencias

El desarrollo del proyecto se realizó utilizando los siguientes paquetes:

### `cors`
Permite que tu aplicación Express acepte solicitudes de diferentes dominios,
necesario para habilitar la comunicación entre servidores.

```text
$ npm install cors
```

### `express`
Un framework minimalista para crear aplicaciones web y APIs en Node.js,
facilitando el manejo de rutas, solicitudes, y respuestas.

```text
$ npm install express --save
```

### `@huggingface/inference`
Es una librería que permite interactuar con los modelos de inteligencia
artificial de Hugging FaceEsta, se utilizó para generar resúmenes basados
en las opiniones recopiladas y para realizar la traducción de las mismas,
ofreciendo un análisis claro.

```text
$ npm install @huggingface/inference
```

### `dotenv`
Me permite mantener configuraciones sensibles, en este caso las claves API
fuera del código fuente y más fáciles de manejar.

```text
$ npm install dotenv
```

### `Api`
Esta API contiene las opiniones buenas y malas de los productos
las cuales obtenemos para generar el resumen. 

```text
$ https://scrapper-service-auto.onrender.com/scrapper-service/
```

```text
$ https://github.com/DianaJ-Dev/scrapper-service-auto
```


## 4. Futuras mejoras

* [ ] Optimización del rendimiento: Mejorar la velocidad 











