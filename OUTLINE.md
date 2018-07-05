# Outline

Roadmap:

1.  Introduction

- me.

2.  Plan

- What is the problem?
- FP in JS basics (touch on pure functions and declarative nature of the fn naming and invocation)
- Rx basics
- Rx Controllers (using example of a index route of an RESTful API and 2 or three transformers)

3.  Conclusion

- This is where the slides (files) can be found (github)
- This is how you can contact me after the conference
- Thank you

## Introduction

1.  Hello.
2.  Me

- include picture, mention karate

3.  Social Medias

## Plan

1.  Why am I even here - What is the problem that exists in current code?

- Obscure, implicit patterns that can only scale as fast as knowledge scales (maybe give an example to use through out)
- where do we want to go? => declarative

- example we will use through out

2.  Functional Programming Principles

- not monads.
- using code to describe what is happening with semantics (map, filter, reduce, ...)
  - step one to a more maintainable code base
- COMPOSE
- write our own compose? (shouldn't be too bad with es6)
- how does compose make code better? (more declarative)
  - pure functions
  - pure fn + pure fn = pure fn (big win) ++ unit tests
  - every programmers nightmare... naming
  - example of a good compose, and then a bad compose
    - a good compose here is about giving the reader of your story the understanding of each chapter.
- reminder of the problem, how does compose help use with this. which is actually most of the way!
  - if the take away is just compose then big winns!!!

3.  RxJS

- what is it.
  - values over time. -> async
  - terminology
    - stream
    - observable
    - event
    - subscribe
  - intro to marble diagrams
  - comparison with lists (ie. iterators)
- RxJS 6 and pipe `|>`
- pipe is just a compose!
- RxJS provides us with ~100 operators! ie. pre-written, pre-tested pure functions we can use to compose!
- a simple example detailing a list comparison
  - the usual multiply then get some even or odd numbers
- these are all semantic, you will understand them with time and knowledge. (reinforce that this is still required, time to learn)
- making these more declarative?! Home made operators

4.  RxJS Controllers!

- refresh on problem, refresh on example. (RESTful)
- More complex example of values from a database. each request(event) from the stream maps to a set of database objects
  - maybe a diagram of this? or just some markdown?
    ----Request----X
    ⌙----{id:1}----{id:2}----
- Apply our operators to each value leaving the database!
- resources for learning RxJS
- my social things again! Ask me questions any time!
