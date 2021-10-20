const data = [
    {
        name: "Rahul Panchal",
        regno: "01",
        JAVA:"A",
        PYTHON:"A+",
        ADOL: "O",
        C : "B"
    },
	{
		name: "Riddhi Panchal",
        regno: "02",
        JAVA:"B",
        PYTHON:"A+",
        ADOL: "O",
        C: "B"
	}
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;

    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "JAVA : " + data[i].JAVA +"</h3>" + "<h3>" + "PYTHON : " 
            + data[i].PYTHON +"</h3>" +"<h3>" + "ADOL : " + data[i].ADOL +"</h3>"+
            "C : " +data[i].C + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>" 

})
