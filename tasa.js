const FIXED_COST = 1.18; // Costo fijo de Mercado Pago
const RATE = 0.0447; // Tasa de Mercado Pago (3.79% + IGV)

// Tasas de financiamiento por número de cuotas
const FINANCING_RATES = {
  3: 0.0299, // 2.99% + IGV
  6: 0.0549, // 5.49% + IGV
  9: 0.0799, // 7.99% + IGV
  12: 0.1049, // 10.49% + IGV
};

// Calcula el total a cobrar con cuotas
const calculateTotalToChargeWithInstallments = (amountToReceive, cuotas) => {
  const financingRate = FINANCING_RATES[cuotas] || 0;
  const tasaLiberacion = amountToReceive * RATE + FIXED_COST; // Costo adicional de liberación
  const tasaFinanciamiento = amountToReceive * financingRate; // Costo adicional por cuotas

  // Total a cobrar
  const totalToCharge = amountToReceive + tasaLiberacion + tasaFinanciamiento;
  return parseFloat(totalToCharge.toFixed(2)); // Redondear a dos decimales
};

// Ejemplo de uso
const amountToReceive = 10.0; // Monto que deseas recibir
const cuotas = 3; // Número de cuotas

const totalCharged = calculateTotalToChargeWithInstallments(amountToReceive, cuotas);

console.log(`Para recibir S/${amountToReceive} en ${cuotas} cuotas, debes cobrar S/${totalCharged}.`);
