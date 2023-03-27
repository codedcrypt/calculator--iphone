const handleNumberClick = (value) =>{
    const currentScreenValue = document.querySelector(".screen").innerHTML;
    // const operatorValue = document.querySelector(".keys").innerHTML;

    if(currentScreenValue === "0"){
        document.querySelector(".screen").innerHTML = value;

        return;
    }
    document.querySelector(".screen").innerHTML = `${currentScreenValue}${value}`;
    console.log("here");
};

const handleScreenDefault = () => {
    document.querySelector(".screen").innerHTML = "0";
};