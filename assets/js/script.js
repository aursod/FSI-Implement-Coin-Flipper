// TODO: Declare any global variables we need



document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    let heads=0
    let tails=0
    let headsPercent= 0
    let tailsPercent=0
    let totalFlipped=0

    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector("#flip").addEventListener('click', function () {
        
  
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        if (Math.random()> 0.5){
            heads++
            totalFlipped++
            headsPercent= Math.round(heads/totalFlipped *100)
            if (tails>0){
                tailsPercent= Math.round(tails/totalFlipped*100)
            }
            document.querySelector('#penny-image').src= './assets/images/penny-heads.jpg'
            document.querySelector('#message').innerHTML= 'You flipped heads!'
            document.querySelector('#heads').innerHTML= heads
            document.querySelector('#tails-percent').innerHTML= tailsPercent+'%'
            document.querySelector('#heads-percent').innerHTML= headsPercent+'%'
    } else {
            tails++
            totalFlipped++
            tailsPercent= Math.round(tails/totalFlipped*100)
            if (heads>0){
            headsPercent= Math.round(heads/totalFlipped *100)
        }
            document.querySelector('#penny-image').src= './assets/images/penny-tails.jpg'
            document.querySelector('#message').innerHTML= 'You flipped tails!'
            document.querySelector('#tails').innerHTML= tails
            document.querySelector('#tails-percent').innerHTML= tailsPercent+'%'
            document.querySelector('#heads-percent').innerHTML= headsPercent+'%'
        }
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    document.querySelector("#clear").addEventListener('click', function () {
        let heads=0
        let tails=0
        let headsPercent= 0
        let tailsPercent=0
        let totalFlipped=0
        document.querySelector('#penny-image').src= './assets/images/penny-heads.jpg'
        document.querySelector('#message').innerHTML= 'Let\'s get flipping!'
        document.querySelector('#heads').innerHTML= '0'
        document.querySelector('#tails').innerHTML= '0'
        document.querySelector('#heads-percent').innerHTML= '0%'
        document.querySelector('#tails-percent').innerHTML= '0%'
    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    })

})