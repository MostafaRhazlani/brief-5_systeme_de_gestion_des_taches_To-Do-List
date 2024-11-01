let columnBoard = [
    {
        'columnId': 1,
        'nameColumn': 'To Do',
        'des': 'This item has not been started',
    },

    {
        'columnId': 2,
        'nameColumn': 'In Progress',
        'des': 'This is being worked on',
    },

    {
        'columnId': 3,
        'nameColumn': 'Done',
        'des': 'This has been completed',
    },
]

let tasks = []

let users = [
    {
        'id': 1,
        'name': 'Mostafa Rhazlani',
    },

    {
        'id': 2,
        'name': 'Othmane Rhazlani',
    },

    {
        'id': 3,
        'name': 'Azdin Rhazlani',
    }
]

let priorities = [
    {
        'id': 1,
        'name': 'P1',
    },

    {
        'id': 2,
        'name': 'P2',
    },

    {
        'id': 3,
        'name': 'P3',
    },
]


// function to find id include in array 
const findObject = (array, id) => {
    return array.find((element) => element.id == id);
}


const blurContainer = document.querySelector('#blur-container');

function refreshBoard() {
    // tbody element
    const board = document.querySelector("#board");

    let htmlBoard = "";
    // Display all items task
    columnBoard.forEach(itemBoard => {
        
        let changeColorBorderBoard = itemBoard.columnId == 1 ? 'border-blue-600' : itemBoard.columnId == 2 ? 'border-yellow-600' : 'border-purple-600'
    
        let taskOfBoard = tasks.filter(task => task.status == itemBoard.columnId)
        
        console.log(taskOfBoard.length);
        
        htmlBoard += `
            <div class="w-2/6 bg-gray-900 border border-gray-500 rounded-md max-h-full flex flex-col justify-between">
                <div class="w-full border-b border-gray-500 bg-gray-800 p-3 rounded-md">
                    <div class="flex items-center">
                        <div class="w-6 h-6 border-2 rounded-full ${changeColorBorderBoard} mr-3"></div>
                        <h1 class="text-white mr-4 font-semibold text-xl">${itemBoard.nameColumn}</h1>
                        <span class="h-6 px-2 text-center bg-gray-900 rounded-full text-white">${taskOfBoard.length}</span>
                    </div>
                    <p class="text-gray-400 mt-2">${itemBoard.des}</p>
                </div>
                <div class="h-5/6 flex flex-col justify-between">
                    <div class="w-11/12 h-[350px] mx-auto overflow-auto hideScroll">
                        ${taskOfBoard.length != 0 ? taskOfBoard.map(task =>
                            `<div class="bg-gray-700 rounded-md mt-3 border border-gray-600">
                                <div class="w-full bg-gray-800 p-2 rounded flex justify-between border-b border-gray-600">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-white mr-3"></div>
                                        <p class="mr-3 text-white font-poppins">Mostafa</p>
                                        <span class="px-2 text-sm font-medium text-center text-white rounded-full ${findObject(priorities, task.priority).name == 'P1' ? 'bg-red-500 border-2 border-red-700' : findObject(priorities, task.priority).name  == 'P2' ? 'bg-orange-500 border-2 border-orange-700' : 'bg-green-500 border-2 border-green-700'} mr-3">${findObject(priorities, task.priority).name }</span>
                                    </div>
                    
                                    <span class="text-white text-2xl">
                                        <i class="fa-solid fa-ellipsis hover:scale-x-105 cursor-pointer"></i>
                                    </span>
                                </div>
                                <div class="p-3">
                                    <h2 class="text-center text-lg font-semibold text-white mb-3">${task.taskName}</h2>
                    
                                    <div class="flex justify-around items-center">
                                        <div class="text-center text-white">
                                            <p>${task.stratDate}</p>
                                            <p>${task.startTime}</p>
                                        </div>
                                        
                                        <div class="w-20 h-1 bg-gray-300 rounded"></div>
                                        
                                        <div class="text-center text-white">
                                            <p>${task.endDate}</p>
                                            <p>${task.endTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                        ).join('') : `<p class="text-white p-3 text-center">Tasks Not Found</p>` }
                    </div>
                    <div id="displyForm" class="bg-gray-900 w-full rounded-b-md p-4 text-gray-400 hover:bg-gray-700 cursor-pointer">
                        <p> <span><i class="fa-solid fa-plus"></i></span> Add item</p>
                    </div>
                </div>    
            </div>
        `
    });
    
    board.innerHTML = htmlBoard;
    const displyForm = document.querySelectorAll('#displyForm');
    // event display form
    displyForm.forEach((btn, columnId) => {
        btn.addEventListener('click', () => {
            form.classList.add('flex')
            form.classList.remove('hidden')
            submit.dataset.id = columnId + 1;

            console.log(submit.dataset.id);
            
            
            blurContainer.classList.add('blur-lg');
        })
    })
}

refreshBoard();

// event display and close form add item
const form = document.querySelector("#formAddItem");
const contentForm = `
    <div class="w-1/2 mx-auto">
        <div class="mt-10 bg-gray-700 shadow-black p-5 rounded-lg ">
            <h2 class="text-center text-3xl mt-3 mb-7 font-bold text-white">Add Task</h2>
            <form action="" method="get" class="flex flex-col">
                <label class="text-white mb-1" for="">Title Of Task</label>
                <input class="title px-4 py-3 rounded-lg " type="text" placeholder="Enter title of task">
                <p class="validateTitle text-sm p-2 h-9 text-red-400 mb-1"></p>
                
                <div class="flex gap-4">
                    <div class="w-2/4">
                        <label class="text-white mb-1" for="">Start Date Of Task</label>
                        <input class="startDate px-4 py-3 w-full rounded-lg" type="date">
                        <p class="validateStDate text-sm p-2 h-9 text-red-400 mb-1"></p>
                    </div>                    
                    <div class="w-2/4">
                        <label class="text-white mb-1" for="">Start Time Of Task</label>
                        <input class="startTime px-4 py-3 w-full rounded-lg" type="time">
                        <p class="validateStTime text-sm p-2 h-9 text-red-400 mb-1"></p>
                    </div>
                </div>
                
                <div class="flex gap-4">
                    <div class="w-2/4">
                        <label class="text-white mb-1" for="">End Date Of Task</label>
                        <input class="endDate px-4 py-3 w-full rounded-lg" type="date">
                        <p class="validateEnDate text-sm p-2 h-9 text-red-400 mb-1"></p>
                    </div>                    
                    <div class="w-2/4">
                        <label class="text-white mb-1" for="">End Time Of Task</label>
                        <input class="endTime px-4 py-3 w-full rounded-lg" type="time">
                        <p class="validateEnTime text-sm p-2 h-9 text-red-400 mb-1"></p>
                    </div>
                </div>

                <label class="text-white mb-1" for="">Select Priority Of Task</label>
                <select class="priority px-4 py-3 rounded-lg mb-4">
                    <optgroup label="Priority">
                    <option value="1">P1</option>
                    <option value="2">P2</option>
                    <option value="3">P3</option>
                    </optgroup>
                </select>
                
                <div class="flex justify-between mt-5">
                <button id="closeForm" class="text-white w-1/5 bg-gray-600 py-3 rounded-lg duration-500 hover:bg-gray-500 cursor-pointer hover:duration-500 hover:scale-[1.06]">Cancel</button>
                    <input id="submit" type="submit" value="Add" class="text-white w-1/5 bg-gray-500 py-3 rounded-lg duration-500 hover:bg-gray-400 cursor-pointer hover:duration-500 hover:scale-[1.06]"">
                </div>
            </form>
        </div>
    </div>`;

form.innerHTML = contentForm;

// elements of message for validation
const submit = document.querySelector('#submit');
const validateTitle = document.querySelector('.validateTitle');
const validateStDate = document.querySelector('.validateStDate');
const validateStTime = document.querySelector('.validateStTime');
const validateEnDate = document.querySelector('.validateEnDate');
const validateEnTime = document.querySelector('.validateEnTime');

// elements of inputs
const title = document.querySelector('.title');
const startDate = document.querySelector('.startDate');
const startTime = document.querySelector('.startTime');
const endDate = document.querySelector('.endDate');
const endTime = document.querySelector('.endTime');
const priority = document.querySelector('.priority');

let index = 1

submit.addEventListener('click', (e) => {
    e.preventDefault();

    validateTitle.innerText = '';
    validateStDate.innerText = '';
    validateStTime.innerText = '';
    validateEnDate.innerText = '';
    validateEnTime.innerText = '';

    if (!title.value) {
        validateTitle.innerText = 'This field is required!';
        return;
    } else if (title.value.length > 25) {
        validateTitle.innerText = 'Title is Too Long';
        return;
    }

    if (!startDate.value) {
        validateStDate.innerText = 'This field is required!';
        return;
    }

    if (!startTime.value) {
        validateStTime.innerText = 'This field is required!';
        return;
    }

    if (!endDate.value) {
        validateEnDate.innerText = 'This field is required!';
        return;
    }

    if (!endTime.value) {
        validateEnTime.innerText = 'This field is required!';
        return;
    }

    const startDateTime = new Date(`${startDate.value}T${startTime.value}`);
    const endDateTime = new Date(`${endDate.value}T${endTime.value}`);

    if (endDateTime < startDateTime) {
        validateEnDate.innerText = 'Start Date And Time Must Be After End Date And Time';
        return;
    }

    if (priority.value === '') {
        validateTitle.innerText = 'Please select a priority!';
        return;
    }

    let taskObject = {
        'taskId':  index++,
        'taskName' : title.value,
        'stratDate': startDate.value,
        'startTime': startTime.value,
        'endDate': endDate.value,
        'endTime': endTime.value,
        'status': submit.dataset.id,
        'priority': priority.value
    }   

    
    tasks.push(taskObject);
    
    refreshBoard();

    // reset data
    title.value = '';
    startDate.value = '';
    startTime.value = '';
    endDate.value = '';
    endTime.value = ''
    priority.value = '1';

    form.classList.add('hidden');
    form.classList.remove('flex')
    blurContainer.classList.remove('blur-lg');
})

const closeForm = document.querySelector('#closeForm');
// event close form
closeForm.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    form.classList.remove('flex')
    blurContainer.classList.remove('blur-lg');


    // reset data
    title.value = '';
    startDate.value = '';
    startTime.value = '';
    endDate.value = '';
    endTime.value = ''
    priority.value = '1';
})


    




