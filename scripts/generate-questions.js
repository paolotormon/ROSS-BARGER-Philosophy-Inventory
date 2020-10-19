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
    "Learning is a PROCESS OF INTERACTING with people and things around us.",
    "It leads to new understandings which can then be used to solve social problems.",
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
      var add_div = document.createElement("div");
			add_div.textContent = question;
			ul.appendChild(add_div);
		},this);
	},

	createDeleteButton: function () {
		var delBtn = document.createElement("button");
		// delBtn.setAttribute("type", "button");
		delBtn.textContent = "Delete";
		delBtn.className = "DeleteBtn";
		return delBtn;
	},

	setEventListeners: function () {
    window.addEventListener("load", function () {
      questions.logList();
    });
  },
};

view.setEventListeners();
view.displayList();