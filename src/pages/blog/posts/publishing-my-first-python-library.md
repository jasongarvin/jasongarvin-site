---
layout: ../../../layouts/MarkdownBlogPost.astro

title: "Publishing My First Python Library"
description: "Learn about my experience publishing a Python library, save yourself trips to StackOverflow, and avoid unnecessary code when you write your own!"
canonicalUrl: "https://jasongarvin.com/blog/posts/publishing-my-first-python-library"
contentCategory: "Technology"
publishDate: "2023-11-07"
editDate: "2024-08-14"
---

After using Python for a few months, I had a spontaneous thought: I’d been consuming 3rd party libraries this whole time but had no idea what they were.

Sure, I understood it was Python code I could import that gave me access to new tools. Okay, cool. But how that process worked, how someone bundled up their code and sent it across the internet to be dispersed into other people’s projects was basically sorcery.

So, as any tinkerer might do, I decided to create my own and figure it out. And thus, Pokewrap, a wrapper library designed to consume the [PokeAPI](https://pokeapi.co/), was born.

Or, well, sort of. Let’s back up a bit.

Pokewrap didn't start as the original goal. It was mostly a reaction to getting frustrated by building an API interface for a different Python project called "Trainer Tools" intended to let me build a Pokemon team, track their levels and moves, and help me with type advantages and ideal builds.

Except I couldn't find a good way to access Pokemon data.

In my naivete, I started with a massive CSV file with every Pokemon. That was fine at first, but terrible immediately after.

## Getting to know APIs

A 1,000+ line CSV wasn’t going to cut it. It was clunky and difficult to distribute. It ate up space in my GitHub repository and made every push and pull take longer. It was obnoxious, difficult to use, and generally unwieldy.

Then I found PokeAPI. I'd never used an API before, but at a glance, it seemed like everything I needed. It had Pokemon, details about them, and an immense store of game data to boot. This was it, I thought!

Except I had no idea how to use it.

I’d never consumed an API before. I didn’t even really know what the heck an Ay Pee Eye was. So I did some research. A lot of research. I dove deep into the subject to absorb as much as I could from a variety of sources.

By the end of all my research, and after completing [a full course on using APIs](https://github.com/craigsdennis/intro-to-apis-course/blob/master/course-notes.md), I felt more comfortable with how it all came together. I’d successfully consumed some APIs and sent myself silly text messages from my computer. I was ready.

I learned how to use the requests library, how to modify HTTP headers, and how to parse the returned JSON data using the native Python library.

Feeling triumphant, I went back to my Trainer Tools project and started trying to retrieve data from the API. It wasn’t as simple as I’d hoped, but I did successfully request and receive some basic information on Gengar.

Cool! But it was taking a long time to set up. Maybe, I thought, I should use an existing library instead so I could focus more on the Trainer Tools part of the project, and less on the API consumption part.

I looked at some existing wrapper libraries for PokeAPI, specifically the ones in Python: [Pokebase by Greg Hilmes](https://github.com/PokeAPI/pokebase) and [PokePy by Paul Hallett](https://github.com/PokeAPI/pokepy). I tried using each for my project.

PokePy was amazingly comprehensive but more complex than I knew what to do with. I combed through the code and was blown away by the effort made to be backward compatible with Python 2.

Pokebase seemed simple enough and worked well, but hadn’t been updated in a long while. So I was hesitant to put it into my project, not knowing if it would disappear or work properly with current generations of Pokemon.

Feeling uncertain, I decided to code my own wrapper library. Not so much to compete since, again, both libraries were comprehensive and excellent. But rather, as a learning opportunity to understand software engineering better, and to grow my knowledge of APIs.

*In hindsight, Pokebase and PokePy are excellent libraries with a ton of thought and energy put into them. Had I used either of those instead of stubbornly pushing forward with my own, I might have gotten further with Trainer Tools. Though, I also wouldn’t be writing this!*

## Building the Scaffolding

At first, I thought I’d just build a quick wrapper class for PokeAPI and feed it into Trainer Tools before moving on. After all, API consumption wasn’t my focus at the time. Instead, it was an obstacle between me and creating my very own digital Pokemon teams and stat tracking.

I had no idea what I was in for. By the time I had the bare-bones API wrapper working, I knew it was going to be a lot more work before it plugged neatly into my code. It could handle successful returns (HTTP status 200) but shattered into a million pieces if the endpoint was offline, if the query parameters were wrong, or if a stiff breeze blew through my house.

That's when the idea for Pokewrap was born. I made a new file in my workspace, aptly titled "wrapper.py" because I'm great with names.

After only a couple of hours spent coding, I realized the wrapper was a better project than Trainer Tools. At least for now. I was committed to learning how to make this frail thing resilient, how to handle alternate status codes, and manage errors when the user input is plain wrong.

By this point, I had a couple of things coded and the rest was a big unknown. I’d made a new class, which could take an API endpoint at instantiation, and would call the requests library to retrieve data from the specified endpoint from PokeAPI. If the call succeeded, I’d get back an HTML status code of 200 and a whole pile of JSON data.

```python
api_response = requests.get(url, timeout=timeout)
response.raise_for_status()
```

Next, I used the json library to assign the returned JSON to a dictionary object, and a different method to save that dictionary object into a JSON file to cache previous data for local retrieval.

One important thing I learned at this point: always cache your responses. Then, check your cache before ever making a new request to the endpoint. It makes future queries faster and avoids hitting the API provider with a bunch of requests all the time. It’s the right thing to do.

That worked for retrieving Pokemon data, and when the HTTP request succeeded, but broke every other time. So I mapped out a list of possible endpoints and added it to the program so it could “know” whether an endpoint was valid before attempting the query.

I later added a dynamic checking system where at the beginning of instantiation, and if nothing existed in the cache, Pokewrap calls the PokeAPI and gets back a list of endpoints. That list gets used to check user queries to make sure the endpoint passed into the ApiController class is valid.

Then I added error handling for bad HTTP status codes or empty returns. This was done to inform the user of Pokewrap about what went wrong, what to try, and if it’s an issue with their code or if the endpoint is down.

```python
except requests.exceptions.HTTPError as error_h:
    print(error_h)
```

Great, so Pokemon requests were working, endpoints were validated, and HTTP status codes were handled. Now I needed to refactor the ApiController class to be able to take queries for non-Pokemon objects, such as berries, trainers, or game data.

To achieve the flexibility of retrieving different datasets, I had to remove every assumption I’d made everywhere. I made variable names more generically applicable and rerouted queries to the base URI for PokeAPI rather than assuming queries would be done at the /pokemon/ endpoint.

Then I added another class of similar functionality to the ApiController class, but designed instead to get back a list of resources at a given endpoint. Instead of passing in a specific thing, say, “Gengar,” you could pass in “Pokemon” and get a list of all possible Pokemon that are valid for future queries.

I made sure this data was cacheable too for quick lookup.

When it comes to API wrappers, that was about it. I needed to use requests to get data, be able to handle the data and route it appropriately to objects and caching, and be able to retrieve the data.

Pokewrap checks for cached data before sending a new request and can interpret the correct Pokemon endpoint by either name or ID. It can also convert between the two for maximum input flexibility and has some validation guardrails in place to make it harder to pass an invalid value.

Somewhere along the way, I learned Python doesn’t support private methods explicitly. Instead, the best practice is to preface every function intended only to be called within the class with a single underscore for protected methods, and a double underscore for strictly internal-only use. This helps other developers understand what to call (and not call) when using your library.

Often throughout the Pokewrap codebase, you’ll see underscored methods, because most of the methods are designed either as constructor or helper methods which get called internal to the class but don’t generally do anything useful to call directly as a user.

## Becoming Production-Ready

I didn’t start considering publishing my yet-unnamed project until after the first draft was done and I was looking at a (somewhat) complete library. Only then did I start fantasizing about loading it into Trainer Tools with a simple command line installation.

And thus, Pokewrap was born. The name is a silly reference to the rap theme at the end of each episode of the first-generation Pokemon TV show–it took me a couple of days brainstorming ideas to settle on that.

By March of 2023, Pokewrap was mostly done, except for some finishing touches like:

- Imports within the package weren't working, because files in different subdirectories couldn't find each other
- The module sort of worked but was missing a ton of safeguards
- I had no idea how to publish a package, use PyPI, or even where to start
- I was in relative vs. absolute import hell
- There were no tests

You know, little stuff.

So I started with the pieces I could easily quantify and got to work on adding safeguards. I also took this opportunity to clean up my docstrings and other forms of documentation.

This is one of those things that’s weird to do as a solo developer without a lot of production experience. I had to browse the internet and pick a style for all my code, docstrings included. It seems like that’s what most other Python developers do, but it’s hard to be certain all by myself.

Nevertheless, by the time I was done with this pass, the library knew to check whether the necessary files were already open. It parsed HTML status codes and returned the appropriate error(s). It knew when to break: if the API didn’t send info, if it got a bad status code, if the cache was already open elsewhere, or if the data wasn’t formatted correctly.

That was a new concept to grasp: the library should return an error if the input is wrong, or if a crucial part of the process is broken say, the API is down or a file is missing. Flagging those errors early helps diagnose the problem, as opposed to quietly failing up front leading to more complicated and obscure error messages later.

I wasn’t used to thinking that way–thinking preventatively about possible users who don’t know everything going on already. I’d only ever coded for myself at that point, so considering unfamiliar users was new to me.

Next up was figuring out pytest. I hadn’t written tests before, since I’d mostly done learning exercises and simple scripts up to that point, so the code wasn’t pre-emptively written with TDD in mind, and instead, I had to get tests in place at the end.

The code needed guardrails made sure I had tests that ensured the passed data was correct, that API calls still worked as intended, and that user input data reached the correct destinations. I also made sure the API requests themselves worked.

All that to say I wrote some basic unit tests.

Phew, two down, three to go.

## Publishing with PyPI

I started learning about PyPI when I realized it was the only effective way to publish the library. I desperately longed for the smoothness of:

```bash
pip install pokewrap
```

I could taste the efficiency. I wanted to use such simple, elegant syntax to import Pokewrap into Trainer Tools someday. I hoped at least 1 other person someday got to enjoy the same.

I’d used PyPI myriad times before when finding other 3rd party libraries (or looking up documentation), but never from the creator side.

First, I played around with uploading the package to [Test PyPI](https://test.pypi.org/) Except when I did, nothing worked and the import was super broken. I scrambled around in the [Test PyPI docs](https://packaging.python.org/en/latest/guides/using-testpypi/), trying to figure out what was wrong.

Oh, also, I was still in import hell.

Fine, okay, geez. Let's back up and deal with import hell.

Oh. My. God. What a nightmare. I remember texting my friend with 20+ years of coding, and a good knowledge of Python. I don't remember exactly what he said, but I'm pretty sure he spit on pip and kicked it in the shins.

I'm also pretty sure he said relative importing and module recognition was one of Python's worst features. Ask him for his exact word yourself if you ever run into him.

So, okay, my mentor didn't know how to help. The internet gave me a million different pieces of advice. It felt like every StackOverflow answer conflicted with the last, everyone had a different approach, and nobody was certain.

One thing was consistent across all the advice, though: it didn't work.

I honestly, genuinely, took a 5-month break from working on Pokewrap once I got the importing issue fixed.

In the end, I settled on a two-pronged solution. First, I used an \_\_init\_\_.py file in the pokewrap directory to tie all the files together. It imports classes from the core file and from the more specific wrapper file and neatly contains that information for import.

Then, I use the sys library to append all files in the core directory to path. Doing so allows my test subdirectory to become aware of the API directory and correctly import the files.

Fun fact: pylint still hates me for my approach, but it's the only one I got working. I must’ve tried over 20 approaches before settling on this one. I’m honestly, genuinely, still not 100% sure why this worked and the other solutions didn’t. If you know of a more elegant way, please let me know!

And to think, all I wanted was for my test suite in a different subdirectory to be able to recognize the directory with Pokewrap in it and import it so it could be tested. That's it.

## Bundling Up

To bundle Pokewrap, I landed on setuptools. There are a variety of other options, such as Hatchling, Flit, and PDM, none of which I’ve tried before, but setuptools worked smoothly enough I didn’t feel the need to shop around.

I do know that [PyPI’s official documentation recommends Hatchling](https://packaging.python.org/en/latest/tutorials/packaging-projects/), so if you’re reading this and want to use something besides setuptools, that seems like a good way to go.

To use setuptools, there are a couple of steps I had to take.

Firstly, I needed a pyproject.toml file to store all my package details and to direct setuptools on what to bundle and how. So I wrote that file, specifying setuptools as the build system, which helps compile the necessary files for distribution.

```ini
[build-system] requires = [
    "setuptools>=63.2.0",
    "wheel"
]
build-backend = "setuptools.build_meta"
```

Part of completing that file is adding basic metadata such as author, version, name, description, and other basic information that helps tie the package to me and ensure the end user receives correct information and links to the right documentation (namely, my readme file). This also includes licenses, keywords, and URLs.

The other part of completing the pyproject.toml file is to include dependencies and specify the required Python versions. To do this, I generated a requirements.txt file from my virtual environment.

Then I combed through that for top-level dependencies (the requests library) that would install other dependencies for me when brought into the workspace, and optional dependencies used for only parts of my code that are non-essential to the average user but useful to a more robust developer environment (pytest, pip-tools).

The first time I did this, I forgot to link requests as a required dependency. That didn’t go well and caused everything to immediately break when pokewrap was imported since the entire thing depends on the requests library being installed. Oops.

After that was surprisingly simple–much more so than I’d imagined, at least. I created a setup.py file that would be used by setuptools, which was mostly duplicate information to what I’d already included in pyproject.toml.

Then it was time to build. Python makes that super easy, and all I had to do was run a quick build command, which when run creates wheel and tarball files for the distribution. The wheel (.whl) file is the build distribution, and the tarball (.tar) is the source distribution.

```bash
python3 -m build
```

Generally, newer versions of pip will use the build distribution, but the source distribution is a necessary fallback for older versions or for when the build distribution fails.

After that, I used twine to upload everything to its final destination under my PyPI account.

```bash
twine check dist/*
# confirms dist is stable

twine upload dist/*
# pass your login credentials or token ID
```

While I eventually wrote a shell script to automate the test deployment, I handled the live deployment by hand out of an abundance of caution. Next time, I’ll write a shell script for that, too.

## Launching For Real

In September of 2023, I finally launched Pokewrap! Partially I’d gotten hyped after watching several peers successfully publish projects and announce them on Threads. It was intoxicating seeing the community support, and more than anything, I wanted to feel like a part of it too. Partially, too, I don’t like leaving projects unfinished and I wanted to finish the work.

Pokewrap worked well the last time I’d used it, so all I had to do was polish it up, make sure it still ran well after 6 months without updates, and figure out how to launch it.

Before launch, I did some comprehensive testing to ensure everything worked. Of course, some things had broken since Python was three versions further than when I’d first written the code, plus some pieces were still rough around the edges from before. I even found a bug I hadn’t caught back in March and tied that off.

Pokewrap received more robust type-checking and guardrails to accept capitalized or lowercase Pokemon names (and endpoint names, too). Then I ensured all the tests passed, that the endpoint data was still accurate, and that all available categories were up to date.

The README file needed some love so I spruced it up. Documentation is important! I wrote some simple examples of how to use Pokewrap. Then I ensured my language was clear, that the expectations of the library were clear, and that common questions were pre-emptively answered in the documentation.

At the behest of StackOverflow, I created a small shell script (which I ended up forgetting about and not calling on the actual release, go figure), that would automate validating the library package and upload it to PyPI.

I tried importing with pip from Test PyPI, fixed the errors that arose, reuploaded, and repeated. After a couple of rounds of that, the pip installation worked and I could successfully call functions, classes, and methods from Pokewrap in a new workspace!

To wrap up, I ensured my author details were accurate, that the date of publication was correct on all relevant pages, and updated the versioning to v1.0.0 for upload. Then, a quick command in zsh and the package was out in the world!

That’s the journey. It was a whole lot of work, especially for what was intended to be a quick and dirty wrapper library, but I’m grateful for making it through. I feel a great deal more confident in my ability to use APIs, handle requests, and manage data.

While I can’t recommend the import issues or the problems I encountered deploying the library, I do highly recommend building a wrapper class (or trying to publish a library) to anyone who wants to learn more about Python and its surrounding ecosystem.

You can read more about creating pokewrap, learning to code, and generally just working my butt off throughout 2023 in [my year-end review](https://jasongarvin.com/blog/2023-in-review.html).

## References

[API Guidelines by Byron Dover](https://github.com/byrondover/api-guidelines/blob/master/Guidelines.md)

[Intro to APIs Course by Craig Dennis](https://github.com/craigsdennis/intro-to-apis-course/blob/master/course-notes.md)

[JSON API: A Specification for Building APIs in JSON](https://jsonapi.org/)

[REST API Design: Filtering, Sorting, and Pagination from the Moesif Blog](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/)
