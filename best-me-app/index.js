const questions = [
  "O que aprendi hoje? ",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar? ",
  "O que me deixou feliz hoje? ",
  "Quantas pessoas ajudei hoje? ",
]

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " > ");
}

const answers = [];

process.stdin.on("data", data => {
  answers.push(data.toString().trim());

  if(answers.length < questions.length){
    ask(answers.length);
  }else{
    // console.log(answers);
    process.exit();
  }

});

process.on('exit', () => {
  console.log(`
    !!! Show de bola Nélio !!!

    ${questions[0]}
    ${answers[0]}

    ${questions[1]}
    ${answers[1]}

    ${questions[2]}
    ${answers[2]}

    ${questions[3]}
    ${answers[3]}

    !!!!!!!!!!!!!!!!!!!!!!!!!!
  `)
})

ask();