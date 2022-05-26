slova=["яблоко","земля","тюрьма","самолёт","человек","картошка","машина","корабль","планшет","трамвай","винтовка","копьё","автомат","караван","телевизор","рубашка","фронт","тыл","полиция","банк","капитал","акционер","политик","оборона","правитель","империя","прицел","огонь","битва","война","мир","ракета","танк","стул","стол","холодильник","капитан","полк","поездка","подъезд","шалаш","дом","як","корова","свинья","собака","кот","балкон"];
var play=0; //состояние
var pictures=0; //изменение картинки
var slovo=[];
var n=0; //случайное число
var s="";
var kolvo=0; //сколько букв в слове
var num=0;
var flag=0; //проверка
var pic=0;
var proverka=""; 
var pp="";

//начало
function start(){
    if(play==0){
        pp="";proverka="";
        play=1;
        num=0;
        game.innerHTML="";
        vis.src="../img/spacer.gif";
        pictures=0;
//убираем все границы и настраиваем ширину ячеек
        for(var k=1; k<=11; k++){
            idtd= document.getElementById("bukva"+k);
            idtd.className="non";
            idtd.innerHTML="";
        }   
//задаем случайное слово
        n=Math.floor(Math.random()*48);
        s=slova[n];
        kolvo=s.length; //в цикл в slovo буквы
//делаем подчеркивание у букв и включаем подслушивание клавиатуры
        for(var i=0; i<kolvo; i++){
            slovo[i]=s.slice(i, i+1); 
            idtd= document.getElementById("bukva"+(i+1));
            idtd.className="dn";
            document.addEventListener("keydown",move);
        }
        //что бы выровнять таблицу делаем ее шириной по количеству букв 
         tab2.style.width=kolvo*30;
         //оставшиеся буквы делаем шириной 0
        for(var i=kolvo; i<=11;i++){
            idtd= document.getElementById("bukva"+i);
             idtd.className="wid";
            
        }
    }
}

//Ввод

function move(event){

    flag=0;
var b=event.key;
//пробегаемся по каждой букве в загаданном слове
for(var i=0; i<=kolvo; i++){
    if(String(b).toLocaleLowerCase()== slovo[i]){
        num++;
        idtd=document.getElementById("bukva"+(i+1));
        idtd.innerHTML=String(b).toLocaleUpperCase();
         flag=1;
         //говорим, что нашли букву
    }
}

proverka="";
//собираем буквы в слово
for(var i=0; i<=kolvo; i++){
        idtd=document.getElementById("bukva"+(i+1));
         pp=idtd.innerHTML.toLocaleLowerCase();
       //alert("s="+s[i]+"pp="+pp);
        if(pp==s[i]){   
proverka+=pp;
            
        }
}   

//победа
if(proverka==s){
    vis.src="../img/victory.png"
    game.innerHTML="Вы победили!";
    document.removeEventListener("keydown",move);
    play=0;
}

//ошибка
if(flag==0){
    if(play==1){
        pictures++;
        vis.src="../img/vis"+pictures+".png";
    }
}

//проигрыш
if(pictures==6){
    game.innerHTML="Вы проиграли!";
    document.removeEventListener("keydown",move);
    vis.src="../img/defeat.png";
    play=0;
}

}
