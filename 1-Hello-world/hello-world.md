# what is Internet ?

- Internet is wires in which all the computer of world connects together with each other
- There are two types of computer one client and another is server
- server is special type computer that is working or keep online 24/7 hours and day to keep serve the requests send by the client

## How Internet works ?

- suppose when you visit the chrome for searching some website or watch movies , listen some music or post some posts in twitter or ig
  then you search or type in large search bar of google the name of website and the website comes .

let's break what happen behind the scene . first the browser send request to the ISP ( internet service provider) that send message to DNS which is Domain Name System / Server which is lookup for the IP of website that you type in search box If it finds then it send back to your browser through ISP then your browser send direct request to that server of suppose google or netflix or instagram or youtube and the website seen in your browser

## How Actually Website works ?

- website are build up with three technologies html, css and js .
  -html - it is used for building the structure of website , content that will display on the website
- css - it is used for styling the website , making the website looking good and changing the background, colors , size of image that all the good looking is done by using css
- Javascript - it is most important for making the website functional and interactive .How will website react when the user click , or hover on button . post image or click on video that the functionality is added by javascript .

- let's understand by examples
  suppose the house is going to build . for building house map is designed , construct and the actual house start to build for building bricks, cement stone , pebbles that things or materials are required to build the house that is html
- after building solid house structure you add window, door design plaster the house with good looking flooring , top of house , coloring the floor , walls that are coming inside the css part

- and the adding bulb, fan ,wiring that all parts which do certain action this is javascript part

## HTTP

- http is Hypertext Transfer Protocol

-Protocol - some set of rules that builds to design standard

- Transfer - means transferring information
- Hypertext - it is links documents that includes many other resource link within

- under protocol
  -it should be in human readable
- can inspect the elements
- source can viewed

- protocol are stateless - it means no state is recorded or saved every user are new user when visited to website

so there comes the concept or role of session or cookies to store the certain information of data that is required

## Request- Response Cycle

- it is simple cycle of sending request by browser and respond back by the server with response
- in request headers are send
  in headers , User-Agent, Date and Time , cookies, method , url

-response send back with status code and response message

- three things are happened
  -what action to perform [Get, Post, ...]
  -where to perform https://someurl.com/auth
  -done or not [200,404,500]

## summary : first TCP connection is established

- then method/url/data (https) - TCL certificate exchange
- then server response with statusCode and statusText
  -TCP closed
