const fs = require('fs')
function generateAllPasswords(words) {
    const result = [];
  
    function generatePasswords(currentPassword, currentIndex) {
      if (currentIndex <= words.length) {
        result.push(currentPassword.join(''));
      }
      if (currentIndex < words.length) {
        for (let i = 0; i < words.length; i++) {
          currentPassword[currentIndex] = words[i];
          generatePasswords(currentPassword, currentIndex + 1);
        }
      }
    }
  
    for (let i = 1; i <= words.length; i++) {
      generatePasswords([], 0, i);
    }
  
    return result;
  }
  
  const words = ['word1', 'word2', 'word3'];
  const passwords = generateAllPasswords(words);
  
var str = ""


for(let i=0; i<passwords.length; i++)
{
    str += passwords[i] + "\n";
}
  

fs.writeFile("passwords.txt", str , (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Password generated"
    )
})
