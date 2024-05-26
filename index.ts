#! /usr/bin/env node
import inquirer from "inquirer"
let todos:string[] = []
let quitApp = false
async function createTodo(array:string[]){
    
    while (quitApp === false){
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select and operation: ",
            name: "selectedOption",
            choices: ['Add', 'Update', 'View', 'Delete', "QuitApp"]
        })
        if (answer.selectedOption === 'Add'){
            let addItem = await inquirer.prompt({
                type: "input",
                name: "addedItem",
                message: "Add Item to Todo List:  "
            })
    
            todos.push(addItem.addedItem)
            console.log(`Successfully Added "${addItem.addedItem}" to List!`);
            console.log(`Current list: ${todos}`);           
    
        }
        else if (answer.selectedOption === 'Update'){
            console.log(`Current list: ${todos}`);
            let updateItem = await inquirer.prompt({
                type: "list",
                name: "update_item",    
                message: "Select an Item for Update:  ",
                choices: todos.map(item => item),
            })
            let updatedItem = await inquirer.prompt({
                type: "input",
                name: "updatedItem",    
                message: "Please add another item:  ",
            })
            let newTodos = todos.filter(val => val !== updateItem.update_item)
            todos = [...newTodos, updatedItem.updatedItem]
            console.log(todos);
            
        } 
        else if (answer.selectedOption === 'View'){
            console.log(`Current list: ${todos}`);
        }
        else if (answer.selectedOption === 'Delete'){
            console.log(`Current list: ${todos}`);
            let deleteItem = await inquirer.prompt({
                type: "list",
                name: "delete_item",    
                message: "Select an Item for Delete:  ",
                choices: todos.map(item => item),
            })
            let newTodos = todos.filter(val => val !== deleteItem.delete_item)
            todos = [...newTodos]
            console.log(todos);
        }
        else if (answer.selectedOption === 'QuitApp'){
            quitApp = true
        }
    }
}

createTodo(todos)