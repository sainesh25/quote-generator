const quote = document.getElementById('quote');
const generateBtn = document.getElementById('generateBtn');
const copyTextBtn = document.getElementById('copyTextBtn');
const copiedTxt = document.getElementById('copiedTxt');
const copyIcon = document.getElementById('copyIcon');
const copyTwitterBtn = document.getElementById('copyTwitterBtn');
const generateQuoteTxt = document.getElementById('generateQuoteTxt');


generateBtn.addEventListener('click', (e) => {
    copyIcon.setAttribute('src', './copy-svgrepo-com.svg');

    const quoteData = [
        'Be yourself; everyone else is already taken.',

        `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
        
        'A room without books is like a body without a soul.',
        
        `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,

        `In three words I can sum up everything I've learned about life: it goes on.`,

        `If you tell the truth, you don't have to remember anything.`,

        `A friend is someone who knows all about you and still loves you.`,

        `Always forgive your enemies; nothing annoys them so much.`,

        `Without music, life would be a mistake.`,
    
    ];
    
    let random = Math.floor(Math.random() * quoteData.length);
    // console.log(quoteData[random].length);
    
    quote.innerHTML =`“${quoteData[random]}”`;
    copiedTxt.innerHTML = ` `;  
    generateQuoteTxt.innerHTML= ` `;
    
});

copyTwitterBtn.addEventListener('click', (e) => {
    function copyToTwitter() {
        let text = quote.innerHTML;
        // Encode the text for a URL
        var encodedText = encodeURIComponent(text);
    
        // Create the Twitter share URL
        var twitterShareURL = 'https://twitter.com/intent/tweet?text=' + encodedText;
    
        // Open a new window or redirect to the Twitter share URL
        window.open(twitterShareURL, '_blank');
    }                                           
    let text = quote.innerHTML;  
    if(text == ''){
        generateQuoteTxt.innerHTML= `Please generate a quote!`;
    }
    else{
        copyToTwitter();
    }
    
});

copyTextBtn.addEventListener('click', (e) => {   
    let text = quote.innerHTML;  
    
    const copyContent = async () => {  
        await navigator.clipboard.writeText(text.slice(1, text.length - 1));  
        copiedTxt.innerHTML = `Copied!`;  
    }  

    if(text == ''){
        generateQuoteTxt.innerHTML= 'Please generate a quote!';
    }
    else{
        copyIcon.setAttribute('src', './tick-svgrepo-com.svg');
        copyContent();
    }
    

});

