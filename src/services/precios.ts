/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (descuento < 0 || descuento > 100) {
    throw new RangeError ('El descuento tiene que estar en el rango del 0 al 100.');
  }
  return precio - (precio * descuento) / 100;
}
