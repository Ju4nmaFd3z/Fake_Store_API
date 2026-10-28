# Respuestas a las preguntas finales

## Pregunta de la sección 6
**¿Qué responsabilidad tendrá HttpClient dentro de nuestra aplicación?**

Realizar las peticiones HTTP (GET, POST, etc.) al servidor externo y devolver las respuestas como `Observable`.

## Preguntas finales

**1. ¿Por qué hemos creado ProductService en lugar de realizar la petición HTTP directamente desde AppComponent?**

Para separar responsabilidades: el componente se encarga solo de mostrar información y gestionar la interfaz, y el servicio de obtener los datos y comunicarse con la API. Así el código es más ordenado, reutilizable por otros componentes y fácil de probar o modificar.

**2. ¿Qué función tiene HttpClient?**

Es la clase de Angular que permite hacer peticiones HTTP a una API REST. Se inyecta en el servicio y se usa con métodos como `get()`.

**3. ¿Qué devuelve el método getProducts()?**

Un `Observable<Product[]>`, no el array directamente. Representa los productos que llegarán cuando el servidor responda.

**4. ¿Para qué utilizamos subscribe()?**

Para ejecutar la petición y recibir el resultado. Sin `subscribe()` la petición HTTP no se lanza. Cuando llegan los datos, se ejecuta la función que le pasamos.

**5. ¿Dónde se almacenan finalmente los productos recibidos?**

En la propiedad `products` del `AppComponent` (`this.products`), desde donde la plantilla los recorre con `@for`.

**6. ¿Qué ocurriría si eliminásemos `provideHttpClient()`?**

La aplicación fallaría con el error `NullInjectorError: No provider for HttpClient`, porque Angular no sabría cómo crear el `HttpClient` que inyecta `ProductService`.
