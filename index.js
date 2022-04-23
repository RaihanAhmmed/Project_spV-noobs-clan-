window.onload = function () { // Main window 

  var cata_list;        // Here, we will list the catagory
  var catagory_choose;  // We will choose catagory 
  var hints ;          //  We need some hint to play
  var word ;              // We will select a word to play
  var guess ;             // Here, we will guess our word
  var guess_list = [ ];      // After guessing, we will store the guess value in this list
  var chnaces_left ;          // Determing the left chances to 
  var guess_count ;           // We will count how many guess we have taken
  var space;                  // If there any space in the word, it will help to determine
  
  
  // List of alphabat to guess a word:
  var char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y',                  'z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  // Getting the elements to show the result
  var show_Lives = document.getElementById("mylives");
  var show_Catagory = document.getElementById("scatagory");
  var hints = document.getElementById("hint");
  var show_Clue = document.getElementById("clue");

  // Creating Alphabat buttons
  var buttons = function () {
    My_button = document.getElementById('buttons');
    chr = document.createElement('Character');

    for (var i = 0; i < char.length; i++) {
      chr.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = char[i];
      check_me();
      My_button.appendChild(chr);
      chr.appendChild(list);
    }
  }
    
  // Selecting catagory function
  var sel_catagory = function () {
    if (catagory_choose === cata_list[0]) {
      catagoryName.innerHTML = "The Chosen Category DC Comic Universe";
    } else if (catagory_choose === cata_list[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Marbel Comic Universe";
    } else if (catagory_choose === cata_list[2]) {
      catagoryName.innerHTML = "The Chosen Category Is 'Guess The Name'";
    }
  }

  // Guessing function
   guess_result = function () {
    word_collector = document.getElementById('hold');
    correct_guess = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct_guess.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guess_list.push(guess);
      word_collector.appendChild(correct_guess);
      correct_guess.appendChild(guess);
    }
  }
  
  // Number of chances left function
   chances = function () {
    show_Lives.innerHTML = "You have " + chnaces_left + " chances remaining!";
    if (chnaces_left < 1) {
      show_Lives.innerHTML = "Game Over!, Well Played. Better Luck next time";
    }
    for (var i = 0; i < guess_list.length; i++) {
      if (guess_count + space === guess_list.length) {
        show_Lives.innerHTML = "Hurray!, Look we got a winner here. Now, serve us a coffee treat";
      }
    }
  }
 
  // One click funtion to check after one click in a button
   check_me = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guess_list[i].innerHTML = geuss;
          guess_count += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        chnaces_left -= 1;
        chances();
        hangman();
      } else {
        chances();
      }
    }
  }
  
  // Main function to play the game
  play = function () {
    cata_list = [
        ["SUPARMAN", "batman", "Wonder-women", "CYBROG", "Green-Lentern", "green-arrow", "FLASH", "AQUAMAN"],
        ["scarlet-witch", "IRONMAN", "Moon-knight", "Star-lord", "HULK", "HAWKEYE", "loki", "Black-panther", "shang-chi", "Quciksilver"],
        ["ARFIN", "SADMAN", "ashik", "Jubyer", "Rayhan"]
    ];

    catagory_choose = cata_list[Math.floor(Math.random() * cata_list.length)];
    word = catagory_choose[Math.floor(Math.random() * catagory_choose.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guess_list = [ ];
    chnaces_left = 20;
    guess_count = 0;
    space = 0;
    guess_result();
    chances();
    sel_catagory();
  }

  play();
  
  // Get hint function
  hint.onclick = function() {

      hints = [
        ["He is an alien", "Step brother of joker", "Just only one female character movie launched in DC", "Full body made with steel except the face", "He has a ring and suit for fight", "He is just like 'HAWKEYE'", "Can time travel", "The god of Sea"],
        ["she can control others mind", "One of the greatest and legendary MCU character", "The trailer of the movie has posted on youtube recently", "One of the main character of 'Galaxy of the guardians'", "Has green skin","Can shot a bow without looking on the target","Most favourited vilain", "The actor of this character has died", "Few days ago, the movie has recieced with a award for most fasinating visual graphics", "The character can run faster"],
        ["Its your name sir (In capital)", "We call him sad man (In capital)", "He is a gentle man in our group ", "This guy Have Personality Disorder", "Die hard fan of MCU"]
    ];

    var catagory_Index = cata_list.indexOf(catagory_choose);
    var hint_Index = catagory_choose.indexOf(word);
    show_Clue.innerHTML = "A Sample Clue: " +  hints [catagory_Index][hint_Index];
  };

  // Reset funtion after playing one time
  document.getElementById('reset').onclick = function() {
    correct_guess.parentNode.removeChild(correct_guess);
    chr.parentNode.removeChild(chr);
    show_Clue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}

//End of the project, This is our project. Truly, we take some help from the online though, but didn't copy paste the code. Thank you.


