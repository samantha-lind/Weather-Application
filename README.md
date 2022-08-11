# Frontend Mentor - QR code component solution

This is a solution to the SheCodes Week 3 Homework task

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

Include the JavaScript file provided in your project, when loading your project, ask the user "Enter a city" (example: Paris), alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"

If the city doesn't exist in the object (i.e: Sydney), alert "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney". Since this is an alert, the link shouldn't be clickable.

Add this behavior to your project and submit the CodeSandbox URL

Note: Please round the values in the Alert to the nearest whole number (no decimal points, e.g. 5.45 should be rounded to 5).

## My process

1. Broke down into several requirements:
   a. Need to prompt the user to input a city
   b. Need to check that city against the weather object to return a true or false match
   c. Need to alert users if the city they input does not match
   d. Need to extract the temperature and humidity data for the matching city
   e. Need to alert the user of their city's temperature and humidity

### Built with

- JavaScript

### What I learned

The square bracket operator as a way to move through an object's different properties doesn't need to be complicated.

Rather than needing to write complicated queries to run through all of the properties, you can simply pull them out by defining variables.

Also, you can update a variable rather than creating a new name for it (for example, instead of "result" being city.toLowerCase, I could have just updated the city variable).

I also didn't need to create and call a function, the script would have run automatically anyway.

### Continued development

It look me a long time to wrap my head around this, and I think my end result a few unnecessary steps.

## Author

Samantha Lind
