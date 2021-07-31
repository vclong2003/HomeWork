class faq {
    $container;
    $questionContainer;
    $question;
    $answer;
    $showButton;

    constructor() {
        this.$container = document.createElement("div");
        this.$questionContainer = document.createElement("div");
        this.$question = document.createElement("div");
        this.$answer = document.createElement("div");
        
        this.$showButton = document.createElement("button");
        this.$showButton.addEventListener("click", this.showAns);

        this.$showButton.innerHTML = "︾";

    
    };

    render(question, answer) {
        this.$question.innerHTML = question;
        this.$answer.innerHTML = answer;
        this.$questionContainer.appendChild(this.$question);
        this.$questionContainer.appendChild(this.$showButton);
        this.$container.appendChild(this.$questionContainer);
        this.$container.appendChild(this.$answer);
        this.$container.className = "container";
        this.$questionContainer.className = "questionContainer";
        this.$answer.className = "answer";
        this.$answer.style.display = "none";

        return this.$container;
    };

    showAns = () => {
        if (this.$answer.style.display == "none") {
            this.$answer.style.display = "block";
            this.$showButton.innerHTML = "︽";
        }
        else {
            this.$answer.style.display = "none";
            this.$showButton.innerHTML = "︾";
        }
    };
}