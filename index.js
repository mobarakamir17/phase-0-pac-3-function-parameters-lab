//test one
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  console.log(introduction("Aki")); // output: "Hi, my name is Aki."
  console.log(introduction("Samip")); // output: "Hi, my name is Samip."

//test two
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  console.log(introductionWithLanguage("Aki", "Ember.js"));
  console.log(introductionWithLanguage("Samip", "React"));
  
  //test three
  function introductionWithLanguageOptional(name, language = ("JavaScript")) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  console.log(introductionWithLanguage("Aki"));
  console.log(introductionWithLanguage("Samip"));