var questions = {
  logList: function () {
    if (this.list.length === 0) {
      console.log("Your list is empty!!");
    } else {
      console.log("Questions: ");
      for (var i = 0; i < this.list.length; i++) {
        console.log(this.list[i]);
      }
    }
  },
  list: [
    "Learning is a PROCESS OF INTERACTING with people and things around us. It leads to new understandings which can then be used to solve social problems.",
    "The human person is PRIMARILY A NERVOUS SYSTEM which is influenced by interaction with the physical environment along lines recognized by science.",
    "Education should lead a person to SPIRITUAL understanding.",
    "Knowledge involves successful ADAPTATION to our surroundings.",
    "Knowledge is accurate if it REFLECTS PHYSICAL, MATERIAL reality.",
    "The human person is basically a SPIRITUAL BEING.",
    "The human person DISCOVERS KNOWLEDGE FROM THE PHYSICAL, MATERIAL WORLD.",
    "Knowledge is meant to be USED. It is ultimately a means to survival.",
    "Education is basically a process of SPIRITUAL GROWTH.",

    "Good is anything that results in ACHIEVING A GOAL AGREED UPON BYSOCIETY.",
    "Knowledge is found by CONSIDERING THE PRACTICAL IMPLICATIONS of ideas.",
    "The human mind is simply THE BRAIN at work.",
    "Learning is a process of CHOOSING OUR IDENTITY.",
    "The mind is a SPIRITUAL entity which determines what reality is (rather than reality determining what the mind is).",
    "All true knowledge engages the FEELINGS of the knower.",
    "The most important thing in reality is the ability to CHOOSE OR DECIDE.",
    "Intelligence is the ABILITY TO KNOW.",
    "A person is nobody until he/she TAKES ACTION. It is in acting (choosing) that a person determines who he/she is.",
    "Intelligence is the ability to formulate and TEST OUT NEW SOLUTIONS to problems.",

    "Reality results from GOD HOLDING THE UNIVERSE IN EXISTENCE by the power of God's thought.",
    "The test of any theory or belief must be its effect on us, that is, its PRACTICAL CONSEQUENCES.",
    "Knowledge is OBJECTIVE (rather than subjective), that is, it is in accord with the teachings of physical science concerning the nature of material reality.",
    "A person is really THE SUM OF THAT PERSON'S CHOICES up to the current point in that person's life.",
    "God is THE SPIRITUAL SUMMIT of reality.",
    "Reality basically consists of dealing with questions of LOVE, CHOICE, FREEDOM, PERSONAL RELATIONSHIPS, AND DEATH.",
    "Education is a process of stimulating students to SEARCH THEMSELVES FOR THEIR IDENTITY.",
    "True ideas are those which we can validate or verify through THE USE OF OUR SENSES (that is, through scientific observation).",
    "Knowledge ultimately comes from a SUPERNATURAL (that is, a divine) source.",
    "Since a person acts freely, he/she is RESPONSIBLE for his/her actions.",

    "A person must reach beyond this material world to fulfill his/her SPIRITUAL destiny.",
    "The physical world as experienced by our senses is basically FACTUAL, OBJECTIVE REALITY.",
    "Knowledge is THAT WHICH IS USEFUL IN ACHIEVING A SOLUTION TO SOME PROBLEM.",
    "Reality has its basis and origin in THE MATERIAL, PHYSICAL WORLD.",
    "Obtaining knowledge is basically a process of SEARCHING THE PHYSICAL UNIVERSE FOR OBJECTIVE FACTS.",
    "People receive knowledge by REVELATION FROM GOD.",
    "People can RECONSTRUCT (REMAKE) SOLUTIONS TO PROBLEMS and this results in new knowledge.",
    "Reality occurs when a person CHOOSES TO FACE A SITUATION AND MAKE A COMMITMENT.",
    "The mind is BIOLOGICAL in origin and can be explained in physical, material terms.",
    "The laws by which human conduct is judged are DETERMINED BY GOD.",
    "Reality ultimately exists in the INDIVIDUAL person.",
  ],
}

var view = {
  displayList: function () {
    var ul = document.querySelector("ul");
    ul.innerHTML = "";

    questions.list.forEach(function (question, index) {
      let add_div = document.createElement("div");
      let name = "q" + index;
      let idA = "a" + index;
      let idB = "b" + index;
      let radioAgree = "<div class='form-check form-check-inline'>"
        + "<input class='form-check-input' type='radio' name='" + name + "' id='" + idA + "' value='0'>"
        + "<label class='form-check-label' for='" + idA + " required'>Agree</label>"
        + "</div>";
      let radioDisagree = "<div class='form-check form-check-inline'>"
        + "<input class='form-check-input' type='radio' name='" + name + "' id='" + idB + "' value='1'>"
        + "<label class='form-check-label' for='" + idB + " required'>Disagree</label>"
        + "</div>";

      add_div.innerHTML = radioAgree + radioDisagree + "<p>" + parseInt(index + 1, 10) + ". " + question + "</p>";
      ul.appendChild(add_div);
    }, this);
    var source = document.createElement("a");
    source.setAttribute("href", "https://www3.nd.edu/~rbarger/ross-barger");
    source.textContent = "Questions from Ross Barger Philosophy Inventory";
    ul.appendChild(source);
  },
  displayResults: function (res,max) {
    if (Array.isArray(res)) {
      console.log("Is array");
    } else {
      console.log("Not array");
    }
    //Conclusion: philosophy is always an array

    let dispDiv = document.querySelector(".display-here");
    dispDiv.innerHTML="";
    let resultDiv = document.createElement("div");
    let philosophyText;
    switch (res[0]) {
      case 0:
        philosophyText = "<h1>You are an IDEALIST</h1>";
        break;
      case 1:
        philosophyText = "<h1>You are a REALIST</h1>";
        break;
      case 2:
        philosophyText = "<h1>You are a PRAGMATIST</h1>";
        break;
      case 3:
        philosophyText = "<h1>You are an EXISTENTIALIST</h1>";
        break;
      default:
        philosophyText  = "<h1>You broke the form. Try again :)</h1>";
    }
    let scoreText ="<h3>You scored "+max+" on that </h3>";
    resultDiv.innerHTML = philosophyText+scoreText;
    dispDiv.appendChild(resultDiv);
  },
  setEventListeners: function () {
    window.addEventListener("load", function () {
      questions.logList();
    });
  },
};

var results = {
  calculate: function () {
    var i = 0;
    var philosophy = [0, 0, 0, 0];
    for (i = 0; i < questions.list.length; i++) {
      var ans = document.querySelector('input[name=q' + i + ']:checked');
      if (ans == null)
        ans = '1';
      else
        ans = document.querySelector('input[name=q' + i + ']:checked').value;
      console.log(ans);
      // This search needs improvement
      if (ans == '0') {// 0 is agree
        this.answers.forEach((element, position) => {
          if (element.includes(i + 1)) {
            console.log(element);
            console.log(position);
            philosophy[position]++;
          }
        });
      }
    }
    const max = Math.max(...philosophy);
    const res = [];
    philosophy.forEach((item, index) => item === max ? res.push(index) : null);
    console.log("Your philosophy is " + res);
    console.log(max);
    if (max != 0) {
      view.displayResults(res,max);
    }

  },
  answers:
    [//idealism, realism, pragmatism, existentialism in order
      [3, 6, 9, 14, 20, 24, 28, 30, 35, 39],
      [2, 5, 7, 12, 17, 22, 31, 33, 34, 38],
      [1, 4, 8, 10, 11, 19, 21, 27, 32, 36],
      [13, 15, 16, 18, 23, 25, 26, 29, 37, 40],
    ]

}

// view.setEventListeners();
// console.log(results.answers);