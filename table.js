function table()
{
    let x=parseFloat(document.getElementById('t').value)
    var result="";
    if(!x)
    {
        alert("fill it first you fool 😂😂")
    }
    else{
            for(let i=1;i<=10;i++)
    {
       let v=x*i
       result= result +x+ " X" +i +" ="+v+"\n"
       
    }
    document.getElementById('res').innerText=result
    document.getElementById('res').style.backgroundColor='black'
    document.getElementById('res').style.color='white'
    alert("Ahaaa-Aahaaa , Touch krne k liye sukriya 😂😂")
  
    }

}
function table1()
{
    let x=parseFloat(document.getElementById('t1').value)
    var result="";
    if(!x)
    {
        alert("fill it first you fool 😂😂")
    }
    else
    {
for(let i=1;i<=10;i++)
    {
       let v=x*i
       result= result +x+ " X" +i +" ="+v+"\n"
       
    }
    document.getElementById('res1').innerText=result
    alert("Ahaaa-Aahaaa doobara , Touch krne k v liye sukriya 😂😂")

    }
    
    
}
document.addEventListener("DOMContentLoaded", function() {
    const affectionDiv = document.getElementById("affection");
    
        const messages = [
            "Your positivity brightens up every room you enter, making everyone around you feel uplifted. ☀️",
            "Your laughter is contagious, spreading happiness like wildfire wherever you go. 🎵",
            "Your perspective on life opens my eyes to new possibilities and fills me with inspiration. 💫",
            "Every moment spent with you feels like a fun-filled adventure, creating memories that last a lifetime. 🌈",
            "Your friendship keeps me grounded and encourages me to pursue my dreams fearlessly. ⚓️",
            "Having you as a friend gives me the confidence to take on any challenge, knowing you'll always have my back. 😊"
        ];
        
    

    // Function to display affectionate messages with animations
    function displayMessages() {
        messages.forEach((message, index) => {
            setTimeout(() => {
                const p = document.createElement("p");
                p.textContent = message;
                p.style.opacity = "0";
                p.style.transform = "translateY(-20px)";
                affectionDiv.appendChild(p);
                setTimeout(() => {
                    p.style.opacity = "1";
                    p.style.transform = "translateY(0)";
                }, 100);
            }, index * 2000); // Delay each message by 2 seconds
        });
    }

    // Call the function to display messages
    displayMessages();
});
function matchNames() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    const lovePercentage = calculateLovePercentage(name1, name2);
    displayResult(lovePercentage);
}

function calculateLovePercentage(name1, name2) {
    // Calculate a random percentage between 50 and 100
    return Math.floor(Math.random() * 51) + 50;
}

function displayResult(lovePercentage) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>Love Percentage: ${lovePercentage}%</p>`;
}
