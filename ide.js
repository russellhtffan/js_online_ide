// Code by Mykyta Polishyk (aka "RussellHTF")
// ------------------------------------------
// IDE GUI
// Work area
const work_area = document.getElementById("work_area");
const launch_button = document.getElementById("launch_button");
const input_box = document.getElementById("input_box");
const output_box = document.getElementById("output_box");
const output_area = document.getElementById("output_area");
// ------------------------------------------
// Header
const header = document.getElementById("menu");

function write_output(text){
    const buffer = output_area.innerHTML;
    output_area.innerHTML = buffer + text;
}

function replace_output(text){
    output_area.innerHTML = text;
}

function clear_output(){
    output_area.innerHTML = null;
}

function get_input(){
    const input_text = document.getElementById("input_area").value;
    return input_text;
}

function execute(){
    const user_code = get_input();

    let logs = [];

    // Pushing to logs console log arguments
    const original_log = console.log;
    console.log = (...args) => {
        logs.push(args.join(" "));
    };

    let result = eval(user_code);
    
    console.log = original_log;

    clear_output();

    if (logs.length > 0) {
        write_output(logs);
    }
    if (result !== undefined) {
        write_output("Result: " + result);
    }
}
launch_button.addEventListener("click", function () {
    execute();
})
