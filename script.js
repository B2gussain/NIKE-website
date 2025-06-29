
function changeShoe(color) {
    const shoeImage = document.getElementById('shoeImage');
    
    if (color === 'white') {
        shoeImage.src = 'assets/white_shoes.png';
    } else if (color === 'grey') {
        shoeImage.src = 'assets/grey_shoes.png';
    } else if (color === 'red') {
        shoeImage.src = 'assets/red_shoes.png';
    } else if (color === 'purple') {
        shoeImage.src = 'assets/purple_shoes.png';
    } else if (color === 'blue') {
        shoeImage.src = 'assets/blue_shoes.png';
    }else if (color === 'orange') {
        shoeImage.src = 'assets/orange_shoes.png';
    }else if (color === 'black') {
        shoeImage.src = 'assets/black_shoes.png';
    }else if (color === 'brown') {
        shoeImage.src = 'assets/brown_shoes.png';
    }else if (color === 'black_white') {
        shoeImage.src = 'assets/black_white_shoes.png';
    }
}

