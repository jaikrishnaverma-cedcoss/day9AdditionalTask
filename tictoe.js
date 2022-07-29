var cnt=1;
var ticArr=[[" "," "," "],[" "," "," "],[" "," "," "]]
function tick(args)
{

    let id=args.id;
    id=id.split('');
    let id1=parseInt(id[0]);
    let id2=parseInt(id[1])

    if(ticArr[id1][id2]==" ")
    {

    if(cnt%2==0)
    {
    // args.innerText="O";
    ticArr[id1][id2]="O";
    }
    else
    {
    // args.innerText="X";
    ticArr[id1][id2]="X";
    }
    cnt++;
    populate();
    checkWin();
}
  
}
function populate()
{
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            
            document.getElementById(i+""+j).innerText=ticArr[i][j];
        }
    }
}
function checkWin()
{
    let flag=0;
    if((ticArr[0][0]=="X"&&ticArr[0][1]=="X"&&ticArr[0][02]=="X")||(ticArr[0][0]=="X"&&ticArr[0][1]=="X"&&ticArr[0][02]=="X"))
    for(let i=0;i<3;i++)
    {
        flag=0;
        for(let j=0;j<3;j++)
        {
            
            if(ticArr[i][j]=="X")
              flag="X";
            if(ticArr[i][j]=="O")
              flag="O";
            
            
        }
    }
}