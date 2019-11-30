function WordCount(str) { 
  return str.split(" ").length;
}
let str = "Bruh EZ"
document.write(str, '<br>');
document.write('Кол-во слов и букв в предложении выше: ', str.length,' и ', WordCount(str), '<br>');
document.write('URL: ', document.URL,'<br>');
document.write('Имя протокола: ', document.location.protocol,'<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');
let strGET = window.location.search.replace( '?', '');

document.write('Подстрока параметров: ', strGET,'<br>');
let abc = 'Anchor +1';
document.write('Новый анкор: ', abc.anchor('ban'), '<br>');
document.write('Новый анкор2: ', abc.anchor('ban2'), '<br>');

document.write('<a href="https://vk.com/nelepye_memes id="CATSHIT">VK</a><br>')
document.write('<a href="https://vk.com/proizoshlapost" target="_blank" id="CATSHIT">ВК</a><br>')

document.write('<img src="https://sun9-22.userapi.com/c847221/v847221916/15ecc6/wOZTADoffdc.jpg" style="width: 20%";height:400px" id="new">')
document.write('<img src="https://sun9-10.userapi.com/c857524/v857524822/f8e4e/hMWdExuDdCE.jpg" style="width: 30%;height:500px" id="new2"><br>')

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Самая большая высотка у картинки: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');
document.write('id первой ссылки: ', document.links[1].id,'<br>');
document.write('Название документа: ', document.title,'<br>');
for(i=0; i<10; i++){
  document.write('<form id="', i,'">')
  document.write('<input type="button" class="ban" value="Имя формы" onClick="alert(\'Имя формы\')"></input>')
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')"></input>')
  document.write('<input type="button" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')"></input>')
  document.write('</form>')
}
for(i=0; i<10; i+=2){
  document.write(document.forms[i].id, ', ')
}
document.write('<form id="form1"><input type="reset" value="Кнопка"></input><input type="text" placeholder="Введите сюда чего-нибудь"></input></form>')
document.write('<form id="form2"><input type="password"></input></form>');


eval((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]])