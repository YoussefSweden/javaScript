var arr='lexicon';
var arrFirst;
console.log(arr);

for(let i=1;i<8;i++)
{
arrFirst=arr[0];
arr=arr.substring(1);
arr=arr+arrFirst
console.log(arr);
}