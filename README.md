# Avoid Stupid Limitations

Don't you hate navigating into some pages, specially news, and been forced to click the "Have my cookies please" button to make an annoying banner disappear? What about some fixed adds that just difficult your reading? Or what do you think of that screen that says you can read the article because you reach monthly limit and now you have to create an account and, of course, let them to have your data?

Well I have feel the same as you, fortunately for you and me, some pages are not "programmed cleverly", so you just have to remove the elements that obfuscate your view. Having that goal in mind, I create this Chrome Extension, which remove some divs from pages I normally visit.

You can checkout this code, and modify logic.js, to add the elements you want to remove.

**The images are my girlfriend smile, so admire her**

## Install it and use it

I have added a video showing how to include the extension in your chrome browser, check [here](https://photos.google.com/photo/AF1QipPdKjXc5GtafgWUvlWCe8SoNQpk8hXwyS-UjT8G), you just need to clone the repository and Load as Unpacked in your Chrome Browser (as showed in the video).

Once is added, you just go to the web page with the annoying element, click in the extension icon and then click in **No Limitations**.

Keep in mind this version only remove some elements of the pages I use to visit (which I won't mention here) so if you need to make this useful for you, read the next section.

## Modify for your own needs

The code is really simple, just go to the logic.js file and check, for example, this lines:

```
elem = document.getElementsByClassName("cookies-acceptance")[0];
removeElement(elem);
```

This two lines are just searching in the DOM for the first element with the name "cookies-acceptance" and removing it. So to fit this to your needs, just add a line obtaining the element from the DOM anc call removeElement function.