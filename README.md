How React works?
1. index.js is the starting point
2. It will mount the app component
3. But before mounting the app component, react will compile the jsx file.
4. inserts dynamic values and hooks any event listeners 
5. browsers dont understand jsx 
6. react converts jsx into javascript
7. Once compiled we've javascript tree like structure , passed down to react dom object
8. Which will look into the methods , then use javascript dom manipulation methods to inject this into website in the form of the html page
9. Initally component evaulation, template already compiled to java script
10. Tree Of elements in js format and react dom has used this tree of elements to inject html elements to real dom
11. When the state changes , it forces react to evaluate the components with new changes
12. again recompiled into java script , react now checks between the js format initally rendered and the newly rendered format , and changes only that particular component which has been changed
13. It compares the new trees, it updates the real dom where it sees change.
14. In short react only compares the newly created dom with already created dom and make changes in real dom only wherever its  needed


Limitation of UseState


