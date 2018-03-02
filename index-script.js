var body = document.body;

var h1 = document.createElement('h1');
var h1Text = document.createTextNode('To Do List!');
h1.appendChild(h1Text);
body.appendChild(h1);

var h5 = document.createElement('h5');
var h5Text = document.createTextNode('This is made with DOM');
h5.appendChild(h5Text);
body.appendChild(h5);

//Membuat div untuk list
var divList =  document.createElement('div');
divList.setAttribute('id', 'divListAttrId');
body.appendChild(divList);

var h2 = document.createElement("h2");
var h2Text3 = document.createTextNode('The current list is empty!');
h2.setAttribute('id', 'listTitle');
h2.appendChild(h2Text3);
divList.appendChild(h2);

//membuat div untuk addList
var divAddList =  document.createElement('div');
divAddList.setAttribute('id', 'divAddListId');
body.appendChild(divAddList);

//Membuat label
var label1 = document.createElement("label");
var labelText = document.createTextNode('Input Task: ');
label1.appendChild(labelText);
divAddList.appendChild(label1);

//Membuat textBox
var textBox = document.createElement('input');
var textBoxId = 'idTextBox';
textBox.setAttribute('id', textBoxId)
textBox.setAttribute('type', 'text');
divAddList.appendChild(textBox);

//Membuat button
var buttonSubmit = document.createElement('button');
var buttonText = document.createTextNode('Submit');
buttonSubmit.appendChild(buttonText);

buttonSubmit.addEventListener('click',function(){
    
    let textBox = document.getElementById(textBoxId);
    
    if(textBox.value === '') alert('Task is Empty! Please input task');
    
    else{
        var taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox');
        taskCheckBox.setAttribute('id', 'taskCB')
        
        var taskLabel = document.createElement('label');
        var LabelText2 = document.createTextNode(textBox.value);
        textBox.value = '';
        
        taskLabel.setAttribute('for', 'taskCB');
        taskLabel.appendChild(LabelText2);
        
        divList.appendChild(taskCheckBox);
        divList.appendChild(taskLabel);
        divList.appendChild(document.createElement('br'));

        document.getElementById('listTitle').innerHTML = 'List!';

        var buttonReset = document.createElement('button');
        var buttonText2 = document.createTextNode('reset');
        buttonReset.appendChild(buttonText2);
        divList.appendChild(buttonReset);

        buttonReset.addEventListener('click', function(){
            window.location.reload();    
        });

    }
});
divAddList.appendChild(buttonSubmit);

