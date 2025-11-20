### Instruction on how to run the code and instruction for user input

Requirement: have Ruby installed. <br>
#### Instructions on Ruby installation:
For macOS:<br>
1. Have brew installed (if you don't, go to https://brew.sh/ and copy the "Install Homebrew" command into terminal)<br>
2. Run `brew install ruby` command in the terminal<br>
3. Check installation by typing `ruby -v`<br><br>

For Windows:<br>
1. Go here https://rubyinstaller.org/downloads/<br>
2. Under the `With Devkit`, find suitable verson (usually, highlighted with bold text)<br>
3. Run installer (More info -> Run anyway) -> Check "Add Ruby executables to PATH" and "Associate .rb ...." -> finish<br>
4. Open command line and type `ruby -v`<br><br>

For Linux:<br>
1. Open terminal and run `sudo apt update`, then `sudo apt install ruby-full`<br>
2. `ruby-v` to check<br><br>

#### Running the code
To run the code, open the terminal, navigate to the local directory of your choice.<br><br>
Then, execute the following commands, one by one.<br><br>
Following the given sequence, you will first execute the currying part and then the closure part.<br><br>
Multiple sample inputs are given for your convenience:<br>

```
git clone https://github.com/ADA-GWU/a4-functional-programming-Faikkk.git

cd a4-functional-programming-Faikkk
# navigate to closures directory
cd closures

# enter your input after `node index.js`

# can execute either with or without the query parameters
# NOTE: the quotes are required for the program to work correctly using windows terminal; works without them on mac
node index.js "GET" "https://jsonplaceholder.typicode.com" "users/" "id=1&username=Bret"
node index.js "GET" "https://jsonplaceholder.typicode.com" "users/"
 
cd ..

# navigate to currying directory
cd currying

bundle install

#execute each time to provide input
ruby main.rb 

GET https://jsonplaceholder.typicode.com users/ id=1&username=Bret

ruby main.rb

GET https://jsonplaceholder.typicode.com users/
```

In case of an error or false input for Ruby: control + C on Mac or CTRL + C on Windows.<br>
For JS, simply retype the command.
