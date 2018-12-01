the computed function does not reload the page, but instead cache data and return it.

methods will be executed every time, but computed methods does not

computed methods work syncronious (always).

Instead of a computed property, we can define the same function as a method instead. For the end result, the two approaches are indeed exactly the same. However, the difference is that computed properties are cached based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed. 