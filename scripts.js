function downloadPDF() {
  const element = document.querySelector("#pdf-content");

  const opt = {
    margin: 0, // Eliminamos márgenes para que el contenedor ocupe toda la hoja
    filename: "Hoja_de_Vida_Jhoann_Reyes.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { 
      scale: 3, // Mayor escala para evitar pixelado
      useCORS: true, 
      letterRendering: true,
      scrollY: 0 
    },
    jsPDF: { 
      unit: "mm", 
      format: "a4", 
      orientation: "portrait",
      precision: 12
    },
  };

  html2pdf().set(opt).from(element).save();
}