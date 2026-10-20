/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (descuento < 0 || descuento > 100) {
    throw new RangeError ('El descuento tiene que estar en el rango del 0 al 100.');
  }

  if (precio < 0) {
    throw new RangeError('No puede ser un número negativo.');
  }
  return precio - (precio * descuento) / 100;
}
