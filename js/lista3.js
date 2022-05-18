alert('Questão número 1');
document.write('<h3>Questão 1:</h3>');
var email;
email = prompt ("Digite seu email");
if ((email.search("@")==-1)) {
    alert("Digite um email válido!");
    email = prompt ("Digite seu email");
}
if ((email.search(" ")>=1)) {
    alert("Digite um email válido!");
    email = prompt ("Digite seu email");
}

document.write('Email válido: '+email);

//******************************************************************************************************************************************* */
alert('Questão número 2');
document.write('<h3>Questão 2:</h3>');

var data_tela = prompt("Digite uma data no formato DD/MM/YYYY ");
var ano = data_tela.substr(6, 4);
var mes = data_tela.substr(3, 2);
var dia = data_tela.substr(0, 2);

var data = new Date(mes + '/' + dia + "/" + ano);

document.write("Data Digitada " + data.toLocaleDateString());

if (isNaN(data) || parseInt(dia) != parseInt(data.getDate())) {
alert("Cuidado, Data Inválida!!");
}

var dataatual = new Date();
document.write('<p>Dias vencidos: ' + Math.floor((dataatual - data) / (1000 * 60 * 60 * 24))+" </p>");

//******************************************************************************************************************************************* */
alert('Questão número 3');
document.write('<h3>Questão 3:</h3>');

document.write('<p>Semanas vencidas ' + Math.floor((dataatual - data) / (1000 * 60 * 60 * 24 * 7))+" </p>");

var semanas = (Math.floor((dataatual - data) / (1000 * 60 * 60 * 24 * 7)));
var diaSemana = data.getDay();
document.write('<p>Dia da Semana: '+diaSemana+'</p>');

var diaS;

switch (diaSemana){
    case 0: 
        diaS = 'Domingo';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
        
    case 1: 
        diaS = 'Segunda';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
        
    case 2: 
        diaS = 'Terça';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
        
    case 3: 
        diaS = 'Quarta';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
        
    case 4: 
        diaS = 'Quinta';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
        
    case 5: 
        diaS = 'Sexta';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
        
    case 6: 
        diaS = 'Sábado';
        document.write('<p>Dia da semana: ' + diaS + '</p>');
    break;
}


var dataatual = new Date(data);
document.write("<table>");
document.write("<tr>");
document.write("<th>Data:</th>");
document.write("<th>Semana:</th>");
document.write("</tr>");
for(nCont=1;nCont<=semanas;nCont++){
dataatual.setDate(dataatual.getDate() +7);
document.write("<tr>");
document.write("<td>"+dataatual.toLocaleDateString()+"</td>");
document.write("<td>"+nCont+"</td>");
}

document.write("</table>");
//******************************************************************************************************************************************* */
alert('Questão número 4');
document.write('<h3>Questão 4:</h3>');

var mesA = prompt("Digite número de um mês ");

var anoA = prompt("Digite um ano ");


