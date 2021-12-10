alert("Привет, я бот");
let str = "";
let phrasesJS = [
  "В JavaScript есть много методов для работы со строкой",
  "Массивы в JavaScript похожи на объекты",
];
while (str.toLowerCase() != "пока") {
  str = prompt(
    "Напишите что-то боту, Если хотите закончить беседу, то напишите 'Пока'"
  );
let checkline = str.toLowerCase();
  if (checkline.indexOf("привет") > -1 || checkline.indexOf("здравствуй") > -1)
    alert("Здравствуйте)");
  else if (checkline.indexOf("пока") == -1) {
if (checkline.indexOf("javascript") > -1){
alert(phrasesJS[Math.floor(Math.random() * phrasesJS.length)]);
}
}
}
alert("До свидания");