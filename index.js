// fibanaci series
const number = parseInt(prompt('Enter the number'));
let n1 = 0, n2 = 1, nextterm;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextterm = n1 + n2;
    n1 = n2;
    n2 = nextterm;
}


// email odd
var email = prompt("enter your mailid");
for (i=0;i<email.length;i++){
    if(email[i]==1||email[i]==3||email[i]==5||email[i]==7||email[i]==9)
{
    console.log(email[i]);
}}

// email even
var email = prompt("enter your mailid");
for (i=0;i<email.length;i++){
    if(email[i]==2||email[i]==4||email[i]==6||email[i]==8)
{
    console.log(email[i]);
}}