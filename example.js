const FIXED_COST = 1.18; // Costo fijo de Mercado Pago
const RATE = 0.0471; // Nueva tasa de Mercado Pago (3.99% + IGV)

const calculateTotalToCharge = (amountToReceive) => {
  // Calcula el total a cobrar
  const totalToCharge = (amountToReceive + FIXED_COST) / (1 - RATE);
  return parseFloat(totalToCharge.toFixed(2)); // Redondear a dos decimales
};

// Ejemplo de uso
const amountToReceive = 17.55; // Monto que deseas recibir
const totalCharged = calculateTotalToCharge(amountToReceive);

console.log(`Para recibir S/${amountToReceive}, debes cobrar S/${totalCharged}.`);
