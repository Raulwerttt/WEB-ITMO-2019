let message = `Hello world!`;
            document.write(`${message}<br>`);
            let countOfSymbols = 0;
            let countOfWords = 1;
            for (let i = 0; i < message.length; ++i) {
                if (message[i] === " ") ++countOfWords;
                else ++countOfSymbols;
            }
            document.write(`symbols: ${countOfSymbols} words: ${countOfWords}<br>`);
            let url = window.location;
            document.write(`Full URL: ${url}<br>`);
            let protokol = url.protocol;
            let name = "";
            let type = "";
            let i = url.pathname.length - 1;
            while (url.pathname[i] != ".") {
                type = url.pathname[i] + type;
                --i;
            }
            --i;
            while (i > 0) {
                name = url.pathname[i] + name;
                --i;
            }
            document.write(`Protokol: ${protokol}<br>`);
            document.write(`File name: ${name}<br>`);
            document.write(`File type: ${type}<br>`);

let ancors = `Anchor`;
            document.write(`Анкор 1: ${`${ancors}1`.anchor(`anc1`)}<br>`);
            document.write(`Анкор 2: ${`${ancors}2`.anchor(`anc2`)}<br>`);
            document.write(`<a href="#anc1" id="anc1Link">${ancors}1</a><br>`);
            document.write(`<a href="#anc2" id="anc2Link">${ancors}2</a><br>`);
            document.write(`<a href="https://google.com" target="_blank" id="googleLink">Google</a><br>`);
            document.write(`<a href="https://yandex.ru" target="_blank" id="yandexLink">Yandex</a><br>`);
            document.write(`<img id="googleImage" src="https://sun9-24.userapi.com/c543103/v543103705/56fd3/laQ656JOqgc.jpg" width="300px" height="300px"><br>`);
            document.write(`<img id="yandexImage" src="https://sun9-28.userapi.com/c543103/v543103705/56fdc/kPb0vufkObM.jpg" width="100px" height="100px"><br>`);
            document.write(`Кол-во анкоров: ${document.anchors.length}<br>`);
            document.write(`Кол-во ссылок: ${document.links.length}<br>`);
            document.write(`Содержимое первого: ${document.anchors[0].innerHTML}<br>`);
            document.write(`Кол-во картинок: ${document.images.length}<br>`);
            document.write(`Ширина первой картинки: ${document.images[0].width}<br>`);
            document.write(
                `Ширина самой широкой картинки:${Math.max.apply(
                    Math,
                    Array.from(document.images).map(function(o) {
                        return o.width;
                    })
                )}<br>`
            );
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            document.write(
                `Cумма всех высот картинок:
                ${Array.from(document.images)
                    .map(function(o) {
                        return o.height;
                    })
                    .reduce(reducer)}<br>`
            );

 for (i = 0; i < 10; i++) {
                document.write(`<form id="${i}"><input type="text">`);
                document.write(`<input type="button" class="ban" value="Имя формы" onClick="alert("Имя формы")">`);
                document.write(`<input type="button" value="Принадлежность" onClick="alert(${i});">`);
                document.write(`<input type="button" value="колличество полей" onClick="alert(${document.forms[i].childElementCount + 1})"></form>`);
            }
            for (i = 0; i < 10; i += 2) {
                document.write(`${document.forms[i].id}, `);
            }
            document.write(`<form id="form1"><input type="reset" value="Кнопка"><input type="text" placeholder="Введите сюда чего-нибудь"></form>`);
            document.write(`<form id="form2"><input type="password"></form>`);