
function changeShowImage()
{
    // console.log("abcd");
    // console.log(n1);
    
    
    for (let i=1; i<=n; i++)
    {
        document.getElementById(`show-photo-${i}`).style.height=(i==(n1+1))?'60vh':'0vh';
        document.getElementById(`show-photo-${i}`).style.width=(i==(n1+1))?'60vh':'0vh';
    }
    n1=(n1==n-1)?0:(n1+1);
}
function swipeRightShowImage()
{
    clearInterval(t);
    n1=(n1==n-1)?0:(n1+1);
    changeShowImage();
    t=setInterval(changeShowImage,3000);
}
function swipeLeftShowImage()
{
    clearInterval(t);
    n1=(n1==0)?n-1:(n1-2);
    changeShowImage();
    t=setInterval(changeShowImage,3000);
}

let n=4,n1=0;
let t=setInterval(changeShowImage,3000);