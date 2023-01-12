//armazenando a referência da Canvas com a biblioteca fabric
var canvas = new fabric.Canvas('myCanvas');
//variaveis que armazenam a largura e a altura do bloco
blockImageWidth = 30;
blockImageHeiht = 30;
//variaveis que armazenam a posição x e y do jogador
playerX = 10;
playerY = 10;
//variavel que armazena o objeto da imagem do personagem
var playerObject= "";
//variavel que armazena o objeto da imagem do bloco
var BlockImageObject= "";
//definindo uma função que adiciona a imagem do jogador na canvas
function playerUpdate()
{
    //adicionando a imagem com fabric no objeto img
    fabric.Image.fromURL("player.png", function(Img) {
        //armazenando a imagem na variavel player object
        playerObject = Img;
        //definindo a largura da imagem
        playerObject.scaleToWidth(100);
        //definindo a altura da imagem
        playerObject.scaleToHeight(200);
        //a função set ajuda a definir a posição Y e X da imagem na canva
        playerObject.set({
        top:playerY,
        left:playerX
        });
        //adicionando a imagem a canva
        canvas.add(playerObject);

    });
}
//definindo uma função que adiciona a imagem do bloco na canvas
function newImage(getImage)
{
    //adicionando a imagem com fabric no objeto img
    fabric.Image.fromURL(getImage, function(Img) {
        //armazenando a imagem na variavel player object
        BlockImageObject = Img;
        //definindo a largura da imagem
        BlockImageObject.scaleToWidth(blockImageWidth);
        //definindo a altura da imagem
        BlockImageObject.scaleToHeight(blockImageHeiht);
        //a função set ajuda a definir a posição Y e X da imagem na canva
        BlockImageObject.set({
        top:playerY,
        left:playerX
        });
        //adicionando a imagem a canva
        canvas.add(BlockImageObject);

    });
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    KeyPressed = e.keyCode;
    //console.log(keyPressed);
    if(e.shiftKey == true && KeyPressed == '80')
    {
        console.log("p e shift pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeiht = blockImageHeiht + 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeiht;
    }
    if(e.shiftKey == true && KeyPressed == '77')
    {
        console.log("m e shift pressionadas juntas");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeiht = blockImageHeiht - 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeiht;
    }
    if(KeyPressed == '38')
    {
        up();
        console.log("cima");
    }
    if(KeyPressed == '40')
    {
        down();
        console.log("baixo");
    }
    if(KeyPressed == '37')
    {
        left();
        console.log("esquerda");
    }
    if(KeyPressed == '39')
    {
        right();
        console.log("direita");
    }
    if(KeyPressed == '71')
    {
        newImage('ground.png');
        console.log("g");
    }
    if(KeyPressed == '76')
    {
        newImage('light_green.png');
        console.log("l");
    }
    if(KeyPressed == '84')
    {
        newImage('trunk.jpg');
        console.log("t");
    }
    if(KeyPressed == '82')
    {
        newImage('roof.jpg');
        console.log("r");
    }
    if(KeyPressed == '89')
    {
        newImage('yellow_wall.png');
        console.log("y");
    }
    if(KeyPressed == '68')
    {
        newImage('dark_green.png');
        console.log("d");
    }
    if(KeyPressed == '85')
    {
        newImage('unique.png');
        console.log("u");
    }
    if(KeyPressed == '67')
    {
        newImage('cloud.jpg');
        console.log("c");
    }
}
function up()
{
    if(playerY >=0)
    {
        playerY = playerY - blockImageHeiht;
        console.log("altura da imagem do bloco = " + blockImageHeiht);
        console.log("quando a tecla direcional Cima for precionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();


    }   
}
function down()
{
    if(playerY <=500)
    {
        playerY = playerY + blockImageHeiht;
        console.log("altura da imagem do bloco = " + blockImageHeiht);
        console.log("quando a tecla direcional Baixo for precionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();


    }   
}
function left()
{
    if(playerX >=0)
    {
        playerX = playerX - blockImageWidth;
        console.log("largura da imagem do bloco = " + blockImageWidth);
        console.log("quando a tecla direcional Esquerda for precionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();


    }   
}
function right()
{
    if(playerX <=850)
    {
        playerX = playerX + blockImageWidth;
        console.log("largura da imagem do bloco = " + blockImageWidth);
        console.log("quando a tecla direcional Direita for precionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();


    }   
}