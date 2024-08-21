# backend-finanzauto

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Instrucciones para ejecutar el proyecto ](#2-Instrucciones-para-ejecutar-el-proyecto)
* [3. Desarrollo del proyecto ](#3-Desarrollo-del-proyecto )
* [4. Futuras mejoras ](#3-Futuras-mejoras )

***

## 1. Resumen del proyecto

Este backend es parte del proyecto [Detalle-finazautos](https://front-end-finanzauto.vercel.app/) y 
está diseñado para manejar solicitudes desde la API [scrapper-service](https://scrapper-service-auto.onrender.com/scrapper-service/marca)
El servicio recibe peticiones para extraer opiniones de los modelos
de auto desde el sitio web Opinautos.

Una vez que la información es obtenida, el backend utiliza inteligencia 
artificialpara procesar y generar un resumen conciso de las opiniones, 
destacando los aspectos positivos y negativos del vehículo. Este resumen
es luego expuesto a través de una API separada, permitiendo a los usuarios
acceder a una visión rápida y clara de la valoración del auto.

El uso de inteligencia artificial optimiza el proceso de síntesis de opiniones,
ofreciendo resúmenes precisos y útiles para la toma de decisiones informadas.

## 2. Instrucciones para ejecutar el proyecto

1. Es muy fácil de usar:

Simplemente accede a la página

```text
https://backend-finanzauto.onrender.com/summary/
```

Luego, añade el nombre de la marca al final de la URL.

```text
https://backend-finanzauto.onrender.com/summary/Chevrolet%20Sail
```

## 3. Desarrollo del proyecto 

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

## 3. Futuras mejoras

* [ ] Optimización del rendimiento: Mejorar la velocidad 











