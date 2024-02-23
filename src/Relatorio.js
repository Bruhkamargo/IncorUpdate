import jsPDF from "jspdf";

export default async (name, data, img1, img2, TotalArray) => {
    // Create a new jsPDF instance
    const pdfDoc = new jsPDF({ orientation: 'landscape' });

    //addImage(imageData, format, x, y, width, height, alias, compression, rotation)
    pdfDoc.addImage('./src/assets/LogoNome.png', 'PNG', 10, 0, 30, 30);

    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(16);
    pdfDoc.text('Avaliação: Estilo de Vida', 149, 20, null, null, 'center');
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(12);

    //text(text, x, y, optionsopt, transform)
    pdfDoc.text(`${data}`, 25, 40);
    pdfDoc.text(`Paciente: ${name}`, 100, 40);

    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(25, 50, 60, 75, ' ');
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(12);
    pdfDoc.text('Estilo de Vida', 55, 57, null, null, "center");
    pdfDoc.text('Máximo:', 30, 75);
    pdfDoc.text('Paciente:', 30, 95);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.text('56', 47, 75);
    pdfDoc.text(`${TotalArray[0]}`, 50, 95);
    pdfDoc.addImage(img1, 'PNG', 85, 50, 135, 75);
    pdfDoc.cell(220, 50, 60, 75, ' ');
    // line(x1, y1, x2, y2, style)
    pdfDoc.line(220, 55, 280, 55)
    pdfDoc.line(220, 60, 280, 60)
    pdfDoc.line(220, 65, 280, 65)
    pdfDoc.line(220, 70, 280, 70)
    pdfDoc.line(220, 75, 280, 75)
    pdfDoc.line(220, 80, 280, 80)
    pdfDoc.line(220, 85, 280, 85)
    pdfDoc.line(220, 90, 280, 90)
    pdfDoc.line(220, 95, 280, 95)
    pdfDoc.line(220, 100, 280, 100)
    pdfDoc.line(220, 105, 280, 105)
    pdfDoc.line(220, 110, 280, 110)
    pdfDoc.line(220, 115, 280, 115)
    pdfDoc.line(220, 120, 280, 120)
    pdfDoc.line(220, 125, 280, 125)
    pdfDoc.line(220, 130, 280, 130)

    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(25, 130, 85, 75, ' ');
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(12);
    //text(text, x, y, optionsopt, transform)
    pdfDoc.text('Pontuações', 55, 137, null, null, "center");
    pdfDoc.text('Atividade Física:', 30, 150);
    pdfDoc.text('Nutrição:', 30, 160);
    pdfDoc.text('Álcool e Tabaco:', 30, 170);
    pdfDoc.text('Sono:', 30, 180);
    pdfDoc.text('Estresse:', 30, 190);
    pdfDoc.text('Relaciomentos:', 30, 200);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.text(`${TotalArray[1]} | 12`, 65, 150);

    pdfDoc.text(`${TotalArray[2]} | 12`, 51, 160);
    
    pdfDoc.text(`${TotalArray[3]} | 8`, 65, 170);

    pdfDoc.text(`${TotalArray[4]} | 8`, 43, 180);

    pdfDoc.text(`${TotalArray[5]} | 8`, 50, 190);

    pdfDoc.text(`${TotalArray[6]} | 8`, 62, 200);
    //addImage(imageData, format, x, y, width, height, alias, compression, rotation)
    pdfDoc.addImage(img2, 'PNG', 85, 130, 195, 75);

    // Save or display the PDF
    pdfDoc.save('Avaliação: Estilo de Vida.pdf');
};