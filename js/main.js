$(function(){
  var OSName="Unknown OS";
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

  var greeting = [
    " ____                                 _         _    __",
    "|  _ \\ ___  ___ _ __   ___  _ __   __| | ___   / \\  /_/",
    "| |_) / _ \\/ __| '_ \\ / _ \\| '_ \\ / _` |/ _ \\ / _ \\ | |",
    "|  _ <  __/\\__ \\ |_) | (_) | | | | (_| |  __// ___ \\| |",
    "|_| \\_\\___||___/ .__/ \\___/|_| |_|\\__,_|\\___/_/   \\_\\_|",
    "               |_|                                     ",
    "http://www.respondeai.com.br/",
    "",
    "Olá, ficamos muito felizes com o seu interesse em trabalhar com a gente!",
    "Queremos transformar o aprendizado de um aluno em uma experiência incrível",
    "por toda a vida dele. Claro que para isso precisamos do melhor time possível!",
    "",
    "Aqui você tem um console javascript.",
    "Explore [[b;#44D544;]JobApplication.help()] para começar a aplicar para a vaga! :D"
  ];

  if(OSName == "MacOS") {
    greeting.push("\nVocê parece estar usando um MacOS! Temos um problema, infelizmente");
    greeting.push("Como pode ser visto em https://github.com/jcubic/jquery.terminal/issues/158");
    greeting.push("Você provavelmente terá alguns problemas com algumas teclas como \" e \'");
    greeting.push("Por isso recomendamos que você abra o terminal do seu navegador e siga o processo [[b;#44D544;]normalmente]");
    greeting.push("Pedimos desculpas pelo incômodo. Estamos tentando resolver o problema");
  }

  Parse.initialize("Rr4t3ce6PMrrudAF9ErRGXMG2nvPEcLN9seNghZh", "e3sGq6NCIW16JYL2EaBzClVCuU1vTKGHlp8AAbVQ");
  $("body").terminal(function(cmd,term){
    var tmp_console = window.console;
    var log = term.echo.bind(term);
    var error = term.error.bind(error);
    window.console = {
      log: log,
      debug: log,
      error: error
    }
    try{
      term.echo("<-- " + eval.call(window,cmd));
    } finally {
      window.console = tmp_console;
    }
  },{
    prompt: "ai> ",
    greetings: greeting.join("\n")
  });
});
