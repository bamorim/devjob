$(function(){
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
    greetings: [
      " ____                                 _         _    __",
      "|  _ \\ ___  ___ _ __   ___  _ __   __| | ___   / \\  /_/",
      "| |_) / _ \\/ __| '_ \\ / _ \\| '_ \\ / _` |/ _ \\ / _ \\ | |",
      "|  _ <  __/\\__ \\ |_) | (_) | | | | (_| |  __// ___ \\| |",
      "|_| \\_\\___||___/ .__/ \\___/|_| |_|\\__,_|\\___/_/   \\_\\_|",
      "               |_|                                     ",
      "",
      "Olá, agradeço seu interesse. Abaixo você tem um console javascript.",
      "Explore [[b;#44D544;]JobApplication.help()] para começar a aplicar! :D",
    ].join("\n")
  });
});
