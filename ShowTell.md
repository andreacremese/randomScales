# B4 presentation start

* checkout `master`
* start app  `gulp`.
* start tests  `gulp tests-live`.
* start `code .`.


* start `IntelliJ`
* open `Smartsheet` for the images
* navigate to `index.html`


# show + tell

## Intro
* introduce app function.
* introduce `Scale.ts` and `app.ts`.
* introduce `js` transpiling.
* introduce `tsconfig.json` and `noImplicitAny`.
* show the terminal on side


## Code Completion (at code time)

* introduce code completion and type inference.
* play with scale.toString() and show type checking.
* show adding comments to the code.
* add a new method to return a string.

    ```
    public getRoot() : string {
        return Roots[this.root];
    }
    ```

* show type checking!
* add a comment
        /**
            * gets only the root of the scale, rather then the full kaboodle!
        */

* tests (and type checking)

    ```
    it ("should have a getRoot method", () => {
        // arrange
        var sut = new Scale(Roots.A, Accidents.b, Alterations.maj );
        // act
        var result = sut.getRoot();
        // assert
        expect(result).toBe("A","string representation of scale does not match spec");
    });
    ```


# noImplicitAny - risking the APIs (and regression bugs)

* switch to `noImplicitAny` false. Add method to Scale that takes one parameter that is any.

    ```
    public printToLowerCase(thing ) {
        console.log(thing.toLowerCase());
    }
    ```

* Use it in the app, such as

    ```

    var mystery = scale.printToLowerCase("AnoTHer StrIng");
    console.log(mystery);
    ```

* But this may happen as well:

    ```    
    /// meanwhile, somewhere else in the code, in another branch.....
    var mystery2 = scale.printToLowerCase(["an array", "of strings"]);
    ```

* No error in transpiling! Switch back `noImplicitAny`


# wrap up

* noImplicitAny
* code completion!