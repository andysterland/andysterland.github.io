function log(){
    codeToEval = 'console.log("Hello from soureURL");\n\n';
    codeToEval ='//# sourceURL=MyAwesomelibrary.js';
    eval(codeToEval);
}
log();