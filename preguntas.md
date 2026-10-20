# Resultados de la práctica

## Registro de resultados

- **GET /salud:** respondió correctamente.
- **Primera ejecución de las pruebas:** pasaron 4 y falló 1.
- **Corrección del servicio:** se agregó la validación del precio y el descuento.
- **Pruebas unitarias:** se probaron descuentos y precios negativos.
- **Prueba HTTP 400:** la API rechaza un descuento inválido.
- **Verificación de tipos:** `npm run typecheck` terminó sin errores.
- **Resultado final:** pasaron las 9 pruebas.

## Preguntas de cierre

**1. ¿Qué diferencia hay entre una prueba manual y una automática?**

En la manual reviso el resultado yo mismo. En la automática, el programa comprueba si el resultado es correcto.

**2. ¿Cuál fue la causa de la primera prueba fallida?**

La función no validaba correctamente los descuentos mayores al 100 %.

**3. ¿Por qué probar casos inválidos?**

Para comprobar que el programa rechace datos incorrectos.

**4. ¿Qué comprueba cada archivo de pruebas?**

`precios.test.ts` comprueba el cálculo del precio y `api.test.ts` comprueba las respuestas de la API.

**5. ¿Qué ventajas tiene ejecutar las pruebas después de cada cambio?**

Permite encontrar errores y comprobar que lo que ya funcionaba siga funcionando.