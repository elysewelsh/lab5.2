REFELCTION QUESTIONS

How did event.preventDefault() help in handling form submission?

    I knew that it was necessary to turn off the default form handling if custom validation was necessary, but I did not know that default handling also refreshes the form, even when there are errors that need correcting. When I commented out the .preventDefault line, it was impossible to do any testing on the form and I think it would be very difficult for users to correct errors that they can't see or address.

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

    HTML attributes like "required" and "minlength" are easy to include without a lot of code because the rules have already been written. JavaScript validation is a little more complex and requires more logic and lines of code. Because it's more customizable, it has the potential to make things more secure. You would use both when the simple HTML meets your needs but when there are other more specific constraints that need custom JavaScript.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
    I set the username property as an item in localStorage. I checked that it was there by accessing the Aplpication tab in DevTools. I watched it get overwritten when I submitted a successful form. I then used getItem to retrieve the username from localStorage, save the value as a variable, and then use the value as input in the username field as long as it wasn't blank or null.

    Storing passwords and other sensitive data in localStorage would not be wise because it's accessible by any website.

Describe a challenge you faced in implementing the real-time validation and how you solved it.

    I didn't know how to write regular expressions, so I also didn't know how to test them. This meant that I had to guess which parts of the RegEx were causing the problem every time I typed a password incorrectly (on purpose). This required a lot of back-and-forth. Eventually, I figured out each part of the RegEx by trial and error. Using .test was new too and the false output wasn't what I was expecting, so that took some time as well, but I just kept console.logging messages at every step to find the problem until it led me to that line of code and I added "= false", got an error about assignment, switched it to "=== false, and it worked.

How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

    When we were working in the group on lesson 5 where I borrowed a lot of this code from, we prioritized getting an error over the error being descriptive. For a few iterations, our errors were just "password", "email", etc. so that we knew that an error was prompted. Once we got errors, we then worked on making them descriptive...and with no spelling errors.

    When I started adding criteria to the password, I had to write three distinct error messages so the user would know the exact issue they should focus on without giving too much information. I tested this field extensively. It took about 2 hours to ensure all the validations were properly displaying once I thought I'd completed writing them.