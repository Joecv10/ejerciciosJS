document.addEventListener("DOMContentLoaded", () => {
  const productosInput = document.getElementById("productos");
  const calcularButton = document.getElementById("calcular");
  const limpiarButton = document.getElementById("limpiar");
  const productosDesc = document.getElementById("productos-desc");
  const resultadoP = document.getElementById("resultado");
  const ventasChartCanvas = document.getElementById("ventasChart");
  let ventasChart;

  function validateInput() {
    const value = productosInput.value.trim();
    const isValid = /^[1-9]\d*$/.test(value); // Validates only positive integers

    productosDesc.style.color = isValid ? "black" : "red";
    calcularButton.style.display = isValid ? "inline-block" : "none";
  }

  function showResults() {
    const numProductos = parseInt(productosInput.value, 10);

    // Generate random data for the products for simplicity
    const products = Array.from({ length: numProductos }, (_, i) => ({
      name: `Producto ${i + 1}`,
      sales: Array.from({ length: 5 }, () => Math.floor(Math.random() * 11)),
    }));

    let tableHtml =
      '<table class="table"><thead><tr><th>Producto</th><th>Ventas Totales</th></tr></thead><tbody>';
    products.forEach((product) => {
      const totalSales = product.sales.reduce((acc, sale) => acc + sale, 0);
      tableHtml += `<tr><td>${product.name}</td><td>${totalSales}</td></tr>`;
    });
    tableHtml += "</tbody></table>";

    const noSalesWednesday = products.filter(
      (product) => product.sales[2] === 0
    ).length;

    resultadoP.innerHTML = `
          ${tableHtml}
          <p>Productos no vendidos los miércoles: ${noSalesWednesday}</p>
        `;

    // Create bar chart for all products
    const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const datasets = products.map((product, index) => ({
      label: product.name,
      data: product.sales,
      backgroundColor: `rgba(${(index * 50) % 255}, ${(index * 100) % 255}, ${
        (index * 150) % 255
      }, 0.2)`,
      borderColor: `rgba(${(index * 50) % 255}, ${(index * 100) % 255}, ${
        (index * 150) % 255
      }, 1)`,
      borderWidth: 1,
    }));

    if (ventasChart) {
      ventasChart.destroy();
    }

    ventasChart = new Chart(ventasChartCanvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  function clearFields() {
    productosInput.value = "";
    resultadoP.innerHTML = "";
    productosDesc.style.color = "black";
    calcularButton.style.display = "none";
    if (ventasChart) {
      ventasChart.destroy();
    }
  }

  productosInput.addEventListener("input", validateInput);
  calcularButton.addEventListener("click", showResults);
  limpiarButton.addEventListener("click", clearFields);

  // Inicializar el botón de calcular como oculto
  calcularButton.style.display = "none";
});
