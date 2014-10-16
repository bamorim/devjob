Array.prototype.toString = function(){
  return JSON.stringify(this);
};

merge = function(obj1,obj2){
  var n = {};
  for(var attrname in obj1){n[attrname] = obj1[attrname];}
  for(var attrname in obj2){n[attrname] = obj2[attrname];}
  return n;
};

(function(){
  "use strict";
  var
    _ = { prop: { writable: true, value: "" }},
    fields = {
      email: merge(_, { desc: "seu email", req: true}),
      name: merge(_, { desc: "seu nome", req: true}),
      about: merge(_, { desc: "fale um pouco sobre você, req: computação ou qualquer coisa :D", req: true}),
      github: merge(_, { desc: "seu usuário no github" }),
      webpage: merge(_, { desc: "tem alguma página pessoal para que possamos te conhecer melhor?" }),
      facebook: merge(_, { desc: "UID do facebook caso queira/tenha" }),
      skills: {
        prop: {
          value: [],
          writable: false
        }
      }
    };

  function JobApplication(){
    var props = {};
    Object.getOwnPropertyNames(fields).forEach(function(field){
      props[field] = fields[field].prop;
    });
    Object.defineProperties(this,props);
    //Object.preventExtensions(this);
  };

  JobApplication.help = function(){
    function field(name,desc,required){
      console.log("[[b;#44D544;]obj."+name+"]: "+desc+(required ? " [[b;#44D544;](obrigatório)]" : ""));
    };

    console.log("\nPrimeiro crie um novo objeto [[b;#44D544;]JobApplication] e em seguida informe:");

    ["name","email","about","github","webpage","facebook"].forEach(function(el){
      field(el, fields[el].desc, fields[el].req);
    });

    console.log("\nEm seguida preencha os valores das habilidades que você mais domina\n"+
                "[[b;#44D544;]obj.skills.push(\"{sua skill aqui}\")];\n\n"+

                "Por fim, quando estiver pronto:\n"+
                "[[b;#44D544;]obj.send()]");
  }

  JobApplication.prototype.send = function(){
    var
      JA = Parse.Object.extend("JobApplication"),
      apply = new JA(),
      self = this,
      errors = [],
      cons = console;

    Object.getOwnPropertyNames(self).forEach(function(prop){
      if(fields[prop].req && (!self[prop] || self[prop].length == 0)){
        errors.push("O campo "+prop+" é obrigatório.");
      }
      apply.set(prop, self[prop]);
    });

    if(errors.length > 0){
      cons.error("JobApplication inválido:\n\n"+errors.join("\n"));
      return;
    }

    apply.save(null, {
      success: function(apply){
        cons.log("Sua aplicação para a vaga foi enviada com sucesso! ID: "+apply.id);
      },
      error: function(apply,error){
        cons.error("Falha ao aplicar para a vaga: " + error.message);
      }
    });
    console.log("Whoa. Enviando sua aplicação! Em breve vamos entrar em contato por email");
  }

  JobApplication.prototype.toString = function(){
    var obj = {},
        self = this;
    Object.getOwnPropertyNames(self).forEach(function(prop){
      obj[prop] = self[prop];
    });
    return JSON.stringify(obj);
  };

  window.JobApplication = JobApplication;
})();

